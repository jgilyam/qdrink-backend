import { AccountingCodeKind, DebitCreditKind, SaleChannel } from "../../accounting-code/domain/accounting.code.entity";
import { CustomerOutDTO } from "../../customer/domain";
import { MovementService } from "../../movement/application/movement.service";
import { MovementAddDTO } from "../../movement/domain/dtos/movement.add.dto";
import { IPaymentRepository, PaymentAddDTO, PaymentEntity, PaymentStatus } from "../domain";
import { Payer } from "./payer";

export class PaymentService{
    private payer :Payer;
    private readonly accountingCodeService;

    constructor(private readonly paymentRepositorty: IPaymentRepository, private readonly movementService: MovementService){
     this.payer = new Payer();
     this.accountingCodeService = movementService.getAccountingCodeService();
    }
    addNewPayment = async(amount: number, customer: CustomerOutDTO, phone: string): Promise<string>=>{
        const {id: customerId} =  customer;
        if(!customerId) throw new Error();
        
        const paymentAdd: PaymentAddDTO = {
            paymentStatus: PaymentStatus.PENDING,
            amount,
            customerId
        }
        const newPayment = await this.paymentRepositorty.add(paymentAdd);
        
        if (!newPayment) throw new Error();
        return await this.payer.generatePaymentRequest(paymentAdd, newPayment.id, phone);
    }
    
    updatePaymentStatus = async(ownPaymentId: string, externalPaymentId: string)=>{
        const externalData = await this.payer.findPaymentDetails(externalPaymentId);
        const { utilExternalData } = externalData
        const paymentEntity = await this.findPaymentEntityById(ownPaymentId);
        const amount = utilExternalData.transactionAmount; 
        const { customer } = paymentEntity;
        const { id: customerId }  = customer;
        
        paymentEntity.externalServiceData = externalData;
        paymentEntity.amount = amount
        const paymentStatus = this.payer.convertStatus(utilExternalData.status);
        paymentEntity.paymentStatus = paymentStatus;
       
        await this.paymentRepositorty.update(paymentEntity);

        if (paymentStatus === PaymentStatus.APPROVED){
            
            const accotiungCodes = await this.accountingCodeService.findAll(DebitCreditKind.CREDIT, SaleChannel.ONLINE, AccountingCodeKind.CREDIT_PAYMENT);
            const  accotiungCode = accotiungCodes[0]
            if(!accotiungCode) throw new Error("No existe el codigo contable")
            const {id: accountingCodeId} = accotiungCode
        
            const movement: MovementAddDTO = {
                id: "",
                amount,
                accountingCodeId
            }
            
            this.movementService.addMovementToCustomer(customerId as string, movement);
            console.log('generar un movimiento...el movimeinto debe actualizar el saldo')
            console.log(JSON.stringify(paymentEntity, undefined, 2))
        }

    }

    private findPaymentEntityById = async (paymentId: string): Promise<PaymentEntity> =>{
        const paymentEntity = await this.paymentRepositorty.findById(paymentId);
        if(!paymentEntity) throw new Error();
        
        return paymentEntity;
      }
}
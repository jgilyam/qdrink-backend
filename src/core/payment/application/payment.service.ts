import { CustomerOutDTO } from "../../customer/domain";
import { IPaymentRepository, PaymentAddDTO, PaymentEntity, PaymentStatus } from "../domain";
import { Payer } from "./payer";

export class PaymentService{
    private payer :Payer;
    constructor(private readonly paymentRepositorty: IPaymentRepository){
     this.payer = new Payer();
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
        
        paymentEntity.externalServiceData = externalData;
        paymentEntity.amount = utilExternalData.transactionAmount; 
        const paymentStatus = this.payer.convertStatus(utilExternalData.status);
        paymentEntity.paymentStatus = paymentStatus;
       
        await this.paymentRepositorty.update(paymentEntity);

        if (paymentStatus === PaymentStatus.APPROVED){
            // TODO: generar un movimiento...el movimeinto debe actualizar el saldo
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
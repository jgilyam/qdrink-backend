import { CustomerOutDTO } from "../../customer/domain";
import { IPaymentRepository, PaymentAddDTO, PaymentRequestAddDto, PaymentStatus } from "../domain";
import { Payer } from "./";

export class PaymentService{
    private  payer :Payer;
    constructor(payer :Payer, private readonly paymentRepositorty: IPaymentRepository){
        this.payer = payer;
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
        
        return this.payer.generatePaymentRequest(paymentAdd, newPayment.id, phone);
    }
    
    updatePaymentStatus = async()=>{
        
    }
}
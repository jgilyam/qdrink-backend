import { PaymentAddDTO } from "../domain/dtos";
import { IPaymentStrategy } from "../domain/payment.strategy";

export class Payer{
    private paymentStrategy: IPaymentStrategy;
    
    constructor(paymentStrategy: IPaymentStrategy){
        this.paymentStrategy = paymentStrategy;
    }
    
    setPaymentStrategy = (paymentStrategy: IPaymentStrategy)=>{
        this.paymentStrategy = paymentStrategy;
    }

    generatePaymentRequest = async (paymentRequest: PaymentAddDTO, paymentId: string, phone: string) => {
        return this.paymentStrategy.createPaymentRequest(paymentRequest, paymentId, phone);
    }

    findPaymentDetails = async (externalPaymentId: string) =>{
        return this.paymentStrategy.findPaymentsDetailById(externalPaymentId);
    }
}
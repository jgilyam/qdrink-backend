import { PaymentRequestAddDto } from "../domain/dtos/payment.request.add.dto";
import { IPaymentStrategy } from "../domain/payment.strategy";

export class Payer{
    private paymentStrategy: IPaymentStrategy;
    
    constructor(paymentStrategy: IPaymentStrategy){
        this.paymentStrategy = paymentStrategy;
    }
    
    setPaymentStrategy = (paymentStrategy: IPaymentStrategy)=>{
        this.paymentStrategy = paymentStrategy;
    }

    generatePaymentRequqest = (paymentRequest: PaymentRequestAddDto) => {
        return this.paymentStrategy.createPaymentRequest(paymentRequest);
    }
}
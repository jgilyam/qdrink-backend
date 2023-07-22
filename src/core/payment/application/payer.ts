import { PaymentRequestAddDto } from "../domain/dtos/payment.request.add.dto";
import { PaymentStrategy } from "../domain/payment.strategy";

export class Payer{
    private paymentStrategy: PaymentStrategy;
    
    constructor(paymentStrategy: PaymentStrategy){
        this.paymentStrategy = paymentStrategy;
    }
    
    setPaymentStrategy = (paymentStrategy: PaymentStrategy)=>{
        this.paymentStrategy = paymentStrategy;
    }

    generatePaymentRequqest = (paymentRequest: PaymentRequestAddDto) => {
        return this.paymentStrategy.createPaymentRequest(paymentRequest);
    }
}
import { PaymentAddDTO } from "../domain/dtos";
import { IPaymentStrategy } from "../domain/payment.strategy";
import { MercadoPagoPaymentStrategy } from "../infrastructure/mercadopago/mercadopago.payment.strategy";

export class Payer{
    private paymentStrategy: IPaymentStrategy;
    
    constructor(){
        this.paymentStrategy = new MercadoPagoPaymentStrategy();
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
    convertStatus = (externalPaymentStatus: string) =>{
        return this.paymentStrategy.convertPaymentStatus(externalPaymentStatus);
    }
}
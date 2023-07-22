import { CustomerOutDTO } from "../../customer/domain";
import { PaymentRequestAddDto } from "../domain/dtos/payment.request.add.dto";
import { MercadoPagoPaymentStrategy } from "../infrastructure/mercadopago/mercadopago.payment.strategy";
import { Payer } from "./payer";

export class PaymentService{
    constructor(){}
    addNewPayment = async(amount: number, customer: CustomerOutDTO, phone: string)=>{
        const mercadoPagoPaymentStrategy = new MercadoPagoPaymentStrategy();
        const payer = new Payer(mercadoPagoPaymentStrategy);
        const paymentRequest: PaymentRequestAddDto = {
            title: `Carga de credito para el numero ${phone}`,
            quantity: 1,
            currency_id: "ARS",
            unit_price: amount
        }
        payer.generatePaymentRequqest(paymentRequest);
    }
}
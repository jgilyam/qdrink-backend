import { Payer } from "./application/payer";
import { PaymentService } from "./application/payment.service";
import { PaymentController } from "./infrastructure/http/payment.controller";
import { MercadoPagoPaymentStrategy } from "./infrastructure/mercadopago/mercadopago.payment.strategy";


const mercadoPagoPaymentStrategy = new MercadoPagoPaymentStrategy();
const payer = new Payer(mercadoPagoPaymentStrategy);

export const paymentService = new PaymentService(payer);
export const paymentController = new PaymentController();
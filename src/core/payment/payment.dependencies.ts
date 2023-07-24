import { Payer, PaymentService } from "./application";
import { PaymentController, MercadoPagoPaymentStrategy, MongoPaymentRepository } from "./infrastructure/";

const mercadoPagoPaymentStrategy = new MercadoPagoPaymentStrategy();
const payer = new Payer(mercadoPagoPaymentStrategy);

const paymentRepositorty = new MongoPaymentRepository();

export const paymentService = new PaymentService(payer, paymentRepositorty);
export const paymentController = new PaymentController(paymentService);
import { PaymentController } from "./infrastructure/http/payment.controller";
import { MongoPaymentRepository } from "./infrastructure/mongo/mongo.payment.repository";
import { PaymentService } from "./application";

const paymentRepositorty = new MongoPaymentRepository();

export const paymentService = new PaymentService(paymentRepositorty);
export const paymentController = new PaymentController(paymentService);
import { PaymentService } from "./application/payment.service";
import { PaymentController } from "./infrastructure/http/payment.controller";

export const paymentService = new PaymentService();
export const paymentController = new PaymentController();
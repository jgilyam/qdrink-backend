import { PaymentController } from "./infrastructure/http/payment.controller";
import { MongoPaymentRepository } from "./infrastructure/mongo/mongo.payment.repository";
import { PaymentService } from "./application";
import { movementService } from "../movement/movement.dependencies";

const paymentRepositorty = new MongoPaymentRepository();

export const paymentService = new PaymentService(paymentRepositorty, movementService);
export const paymentController = new PaymentController(paymentService);
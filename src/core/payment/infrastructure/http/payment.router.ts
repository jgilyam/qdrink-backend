import { Router } from "express";
import { paymentController } from "./../../payment.dependencies"


const router = Router();

router.post("/:paymentId/notifications", paymentController.updatePaymentStatus);


export default router;
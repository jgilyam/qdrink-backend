import { Router } from "express";
import { paymentController } from "./../../payment.dependencies"


const router = Router();

router.post("/webHook/:userId", paymentController.add);


export default router;
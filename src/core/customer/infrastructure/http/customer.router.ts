import { Router } from "express";

import { customerController } from "../../customer.dependencies";
import { authenticationMiddelware } from "../../../auth/auth.dependencies";


const router = Router();

router.get("/tapLogin", authenticationMiddelware.authenticate, customerController.findById);

export default router;
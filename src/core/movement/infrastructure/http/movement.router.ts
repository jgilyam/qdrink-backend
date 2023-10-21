import { Router } from "express";

import { movementController } from "../../movement.dependencies";
import { authenticationMiddelware } from "../../../auth/auth.dependencies";


const router = Router();

router.get("/chargeConsumption", authenticationMiddelware.authenticate, movementController.chargeConsumption);

export default router;
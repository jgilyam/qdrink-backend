import { Router } from "express";

import { tapController } from "../../tap.dependencies";
import tapErrorHandler from "./tap.exception.handler";
import { authenticationMiddelware } from "../../../auth/auth.dependencies"

const router = Router();

router.post("/salepoints/:salePointId/taps", tapController.add);
router.get("/salepoints/:salePointId/taps", authenticationMiddelware.authenticate ,tapController.findByUnitNumber);

router.use(tapErrorHandler)

export default router;

// TODO: agregar capa de validacion estatica
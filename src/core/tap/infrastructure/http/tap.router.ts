import { Router } from "express";

import { tapController } from "../../tap.dependencies";
import tapErrorHandler from "./tap.exception.handler";

const router = Router();

router.post("/salepoints/:salePointId/taps", tapController.add);
router.get("/salepoints/:salePointId/taps", tapController.findByUnitNumber);

router.use(tapErrorHandler)

export default router;

// TODO: agregar capa de validacion estatica
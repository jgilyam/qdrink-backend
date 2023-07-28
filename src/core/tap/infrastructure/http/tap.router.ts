import { Router } from "express";

import { tapController } from "../../tap.dependencies";
import tapErrorHandler from "./tap.exception.handler";

const router = Router();

router.post("/", tapController.add);
router.get("/", tapController.findByUnitNumber);

router.use(tapErrorHandler)

export default router;
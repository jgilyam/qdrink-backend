import { Router } from "express";

import { authController } from "../../auth.dependencies";


const router = Router();

router.post("/tapLogin", authController.tapLogin);

export default router;
import { Router } from "express";

import { drinkController } from "../../drink.dependencies";

const router = Router();

router.post("/", drinkController.add);

export default router;
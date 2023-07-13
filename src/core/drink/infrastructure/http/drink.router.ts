import { NextFunction, Router,Request, Response } from "express";

import { drinkController } from "../../drink.dependencies";
import { addValidatorRule, editValidatorRule } from "./drink.validator";
import { validateFields } from "../../../../middlewares/validator.middleware";

const router = Router();

router.post("/", addValidatorRule(), validateFields, drinkController.add);
router.get("/", drinkController.findAll);
router.put("/:drinkId", editValidatorRule(), validateFields, drinkController.edit);

export default router;
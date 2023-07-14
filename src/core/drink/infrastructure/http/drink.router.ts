import { NextFunction, Router,Request, Response } from "express";

import { drinkController } from "../../drink.dependencies";
import { addValidatorRule, editValidatorRule } from "./drink.validator";
import { validateFields } from "../../../../middlewares/validator.middleware";
import drinkErrorHandler from "./drink.exception.handler";

const router = Router();

router.post("/", addValidatorRule(), validateFields, drinkController.add);
router.get("/", drinkController.findAll);
router.put("/:drinkId", editValidatorRule(), validateFields, drinkController.edit);
router.delete("/:drinkId", editValidatorRule(), validateFields, drinkController.delete);

router.use(drinkErrorHandler)

export default router;
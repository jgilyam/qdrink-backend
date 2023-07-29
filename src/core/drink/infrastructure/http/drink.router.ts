import { NextFunction, Router,Request, Response } from "express";

import { drinkController } from "../../drink.dependencies";
import { addValidatorRule, editValidatorRule } from "./drink.validator";
import { validateFields } from "../../../../middlewares/validator.middleware";
import drinkErrorHandler from "./drink.exception.handler";

const router = Router();

router.post("/salepoints/:salePointId/drinks", addValidatorRule(), validateFields, drinkController.add);
router.get("/salepoints/:salePointId/drinks", drinkController.findAll);
router.put("/salepoints/:salePointId/drinks/:drinkId", editValidatorRule(), validateFields, drinkController.edit);
router.delete("salepoints/:salePointId/drinks/:drinkId", editValidatorRule(), validateFields, drinkController.delete);

router.use(drinkErrorHandler)

export default router;

// TODO: agregar validacion estatica de los id...deben ser de mongo 
import { Router } from "express";
import { customerController } from "./containers/CustomerContainer";

const router = Router();


router.get("/", customerController.findAllCustomers);
router.get("/:id/sendMessage", customerController.sendMessage);
router.post("/", customerController.addCustomer);
router.get("/:id", customerController.findCustomerById);

export default router;

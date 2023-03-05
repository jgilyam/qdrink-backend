import { Router } from "express";
import { customerController } from "./containers/CustomerContainer";

const router = Router();


router.get("/", customerController.findAllCustomers);
router.get("/:id/sendMessage", customerController.sendMessage);
router.post("/", customerController.addCustomer);
router.get("/:id", customerController.findCustomerById);
router.delete("/:id", customerController.deleteCustomerById);

export default router;

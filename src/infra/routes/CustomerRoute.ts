import { Router } from "express";
import { CurstomerService } from "../../aplication/CustomerService";
import { CustomerController } from "../controllers/CustomerController";
import dbClient from "../clients/db";
import { CustomerRepository } from "../repositories/CustomerRepository";
import { MessagerClient } from "../clients/apiWhatsappBussines/MessagerClient";
import { MessageMapper } from "../clients/apiWhatsappBussines/domain/mappers/MessageMapper";
import { CustomerMapper } from "../../domain/mappers/CustomerMapper";

const router = Router();

const customerRepository = new CustomerRepository(dbClient);

const messageMapper = new MessageMapper();
const messagerClient = new MessagerClient(messageMapper);
const customerMapper = new CustomerMapper();
const customerService = new CurstomerService(
  customerRepository,
  messagerClient,
  customerMapper
);
const customerController = new CustomerController(customerService);

router.get("/", customerController.findAllCustomers);
router.get("/:id/sendMessage", customerController.sendMessage);
router.post("/", customerController.addCustomer);

export default router;

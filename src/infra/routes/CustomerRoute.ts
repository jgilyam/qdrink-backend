import { Router } from "express";
import { CurstomerService } from "../../aplication/CustomerService";
import { CustomerController } from "../controllers/CustomerController";
import dbClient from "../clients/db";
import { CustomerRepository } from "../repositories/CustomerRepository";

const router = Router();

const customerRepository = new CustomerRepository(dbClient);
const customerService = new CurstomerService(customerRepository);
const customerController = new CustomerController(customerService);

router.get("/", customerController.findAllCustomers);

export default router;

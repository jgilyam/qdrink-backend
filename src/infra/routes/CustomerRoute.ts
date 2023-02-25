import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { CurstomerService } from "../../aplication/CustomerService";
import { CustomerController } from "../controllers/CustomerController";
import { PrismaRepository } from "../repositories/PrismaReposiroty";
import dbClient from "../clients/db";

const router = Router();

const customerRepository = new PrismaRepository(dbClient);
const customerService = new CurstomerService(customerRepository);
const customerController = new CustomerController(customerService);

router.get("/", customerController.findAllCustomers);

export default router;

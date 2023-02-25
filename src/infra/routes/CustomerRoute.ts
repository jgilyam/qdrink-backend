import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { CurstomerService } from "../../aplication/CustomerService";
import { CustomerController } from "../controllers/CustomerController";
import { PrismaRepository } from "../repositories/PrismaReposiroty";

const router = Router();
const prisma = new PrismaClient();

const customerRepository = new PrismaRepository(prisma);
const customerService = new CurstomerService(customerRepository);
const customerController = new CustomerController(customerService);

router.get("/", customerController.findAllCustomers);

export default router;

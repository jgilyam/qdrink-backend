import { CustomerService } from "./application/customer.service";
import { CustomerMapper } from "./infrastructure/default.customer.mapper";
import { CustomerController } from "./infrastructure/http/customer.controller";
import { MongoCustomerRepository } from "./infrastructure/mongo/mongo.customer.repository";

const customerMapper = new CustomerMapper();
const customerRepository = new MongoCustomerRepository();
export const customerService = new CustomerService(customerRepository, customerMapper);
export const customerController = new CustomerController(customerService);
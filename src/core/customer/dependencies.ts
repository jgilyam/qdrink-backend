import { CustoemrService } from "./application/customer.service";
import { CustomerMapper } from "./infrastructure/default.customer.mapper";
import { MongoCustomerRepository } from "./infrastructure/mongo/mongo.customer.repository";

const customerMapper = new CustomerMapper();
const customerRepository = new MongoCustomerRepository();
export const custoemrService = new CustoemrService(customerRepository, customerMapper);
import { CurstomerService } from "../../../aplication/CustomerService";
import { CustomerController } from "../../controllers/CustomerController";
import { TypeOrmCustomerRepository } from "../../db/TypeOrmCustomerRepository";
import { MessagerClient } from "../../clients/apiWhatsappBussines/MessagerClient";
import { MessageMapper } from "../../clients/apiWhatsappBussines/domain/mappers/MessageMapper";
import { CustomerMapper } from "../../../domain/mappers/CustomerMapper";
import { db } from "../../db/data-source";
import { CustomerEntityImp } from "../../../domain/entities";

const typeOrmRepository = db.getRepository(CustomerEntityImp);
const customerRepository = new TypeOrmCustomerRepository<CustomerEntityImp>(
  typeOrmRepository
);
const messageMapper = new MessageMapper();
const messagerClient = new MessagerClient(messageMapper);
const customerMapper = new CustomerMapper();
const customerService = new CurstomerService(
  customerRepository,
  messagerClient,
  customerMapper
);
export const customerController = new CustomerController(customerService);

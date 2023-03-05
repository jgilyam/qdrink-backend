import { CurstomerService } from "../../../aplication/services/CustomerService";
import { CustomerController } from "../../controllers/CustomerController";
import { CustomerRepository } from "../../db/repositories/CustomerRepository";
import { MessagerClient } from "../../clients/apiWhatsappBussines/MessagerClient";
import { MessageMapper } from "../../clients/apiWhatsappBussines/domain/mappers/MessageMapper";
import { CustomerMapper } from "../../../domain/mappers/CustomerMapper";
import { CustomerValidator } from "../../../aplication/validators/CustomerValidator";

const customerRepository = new CustomerRepository();
const messageMapper = new MessageMapper();
const messagerClient = new MessagerClient(messageMapper);
const customerMapper = new CustomerMapper();
const customerValidator = new CustomerValidator(customerRepository);
const customerService = new CurstomerService(
  customerRepository,
  messagerClient,
  customerMapper,
  customerValidator
);
export const customerController = new CustomerController(customerService);

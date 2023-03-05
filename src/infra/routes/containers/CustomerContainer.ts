import { CurstomerService } from "../../../aplication/CustomerService";
import { CustomerController } from "../../controllers/CustomerController";
import { CustomerRepository } from "../../db/CustomerRepository";
import { MessagerClient } from "../../clients/apiWhatsappBussines/MessagerClient";
import { MessageMapper } from "../../clients/apiWhatsappBussines/domain/mappers/MessageMapper";
import { CustomerMapper } from "../../../domain/mappers/CustomerMapper";
import Customer from "../../db/models/CustomerEntityImp";

const customerRepository = new CustomerRepository();
const messageMapper = new MessageMapper();
const messagerClient = new MessagerClient(messageMapper);
const customerMapper = new CustomerMapper();
const customerService = new CurstomerService(
  customerRepository,
  messagerClient,
  customerMapper
);
export const customerController = new CustomerController(customerService);

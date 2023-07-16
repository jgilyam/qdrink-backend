import { CustomerEntity } from "./customer.entity";
import { CustomerOutDTO } from "./dtos/customer.out.dto";

export interface ICustomerMapper{
    customerEntityToCustomerOutDTO(customerEntity: CustomerEntity | null): CustomerOutDTO | null
}
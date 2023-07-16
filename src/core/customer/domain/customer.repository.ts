import { CustomerEntity } from "./customer.entity";
import { CustomerInDTO } from "./dtos/customer.add.dto";

export interface ICustomerRepository{
    add(customerInDTO: CustomerInDTO): Promise<CustomerEntity>;
    findAll(): Promise<CustomerEntity[]>;
    edit(id: string, customerInDTO: CustomerInDTO): Promise<CustomerEntity | null>;
    findByPhone(phone: string): Promise<CustomerEntity | null>;
}
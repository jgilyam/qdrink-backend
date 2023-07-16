import { CustomerEntity } from "./customer.entity";
import { CustomerInDTO } from "./dtos/customer.add.dto";

export interface ICustomerRepository{
    add(drinkAddDTO: CustomerInDTO): Promise<CustomerEntity>;
    findAll(): Promise<CustomerEntity[]>;
    edit(id: string, drinkAddDTO: CustomerInDTO): Promise<CustomerEntity | null>;
    findByPhone(phone: string): Promise<CustomerEntity | null>;
}
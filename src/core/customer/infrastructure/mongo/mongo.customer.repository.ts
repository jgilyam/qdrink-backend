import { CustomerEntity, CustomerInDTO, ICustomerRepository } from "../../domain";
import { Customer } from "./mongo.customer.model";

export class MongoCustomerRepository implements ICustomerRepository{
    add(drinkAddDTO: CustomerInDTO): Promise<CustomerEntity> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<CustomerEntity[]> {
        throw new Error("Method not implemented.");
    }
    edit(id: string, drinkAddDTO: CustomerInDTO): Promise<CustomerEntity | null> {
        throw new Error("Method not implemented.");
    }
    findByPhone = async (phone: string): Promise<CustomerEntity | null>=>{
        return await Customer.findOne({phone});
        
    }

}
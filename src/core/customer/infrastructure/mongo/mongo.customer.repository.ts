import { CustomerEntity, CustomerInDTO, ICustomerRepository } from "../../domain";
import { Customer } from "./mongo.customer.model";

export class MongoCustomerRepository implements ICustomerRepository{
    add = async(customerInDTO: CustomerInDTO): Promise<CustomerEntity> => {
        const customerEntity = new Customer({
            ...customerInDTO
        })
        return await customerEntity.save();
    }
    
    findAll(): Promise<CustomerEntity[]> {
        throw new Error("Method not implemented.");
    }
    
    edit(id: string, customerInDTO: CustomerInDTO): Promise<CustomerEntity | null> {
        throw new Error("Method not implemented.");
    }
    
    findByPhone = async (phone: string): Promise<CustomerEntity | null>=>{
        return await Customer.findOne({phone});
    }

    save = async(customerEntity: CustomerEntity): Promise<CustomerEntity> => {
        const {id} = customerEntity;
        if(!id) throw new Error("Id not found")
        await Customer.findByIdAndUpdate(id, {
            ...customerEntity,
          });
          return customerEntity
    }
    findById = async(customerId: string): Promise<CustomerEntity | null> => {
        return await Customer.findById(customerId);
    }
}
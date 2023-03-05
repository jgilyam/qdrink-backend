import { CustomerEntity } from "../../../domain/entities";
import { IBaseRepository } from "../../../domain/interfaces/IBaseRepository";
import { ICustomerRepository } from "../../../domain/interfaces/ICustomerRepository";
import Customer from "../models/CustomerEntityImp";

export class CustomerRepository implements ICustomerRepository {
  constructor() {}
  async findCusomerByEmail(email: string): Promise<CustomerEntity | null> {
    const query = { where: { email: email } };
    const customer = await Customer.findOne(query);
    return customer;
  }
  async save(entity: CustomerEntity): Promise<CustomerEntity> {
    return await Customer.create(entity);
  }
  async findAll(): Promise<CustomerEntity[] | null> {
    return await Customer.findAll();
  }
  async findById(entityId: number): Promise<CustomerEntity | null> {
    return await Customer.findByPk(entityId);
  }
  async deleteById(entityId: number): Promise<CustomerEntity | null> {
    const customer = await Customer.findByPk(entityId);
    console.log(customer);
    customer?.destroy();
    return customer;
  }
}

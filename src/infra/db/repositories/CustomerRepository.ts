import { CustomerEntity } from "../../../domain/entities";
import { IPersistence } from "../../../domain/interfaces/IPersistence";
import Customer from "../models/CustomerEntityImp";

export class CustomerRepository implements IPersistence<CustomerEntity> {
  constructor() {}
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

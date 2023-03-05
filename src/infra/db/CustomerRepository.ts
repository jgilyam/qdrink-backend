import { CustomerEntity } from "../../domain/entities";
import { IPersistence } from "../../domain/interfaces/IPersistence";
import Customer from "./models/CustomerEntityImp";

export class CustomerRepository implements IPersistence<CustomerEntity> {
  constructor() {}
  async save(entity: CustomerEntity): Promise<any> {
    return await Customer.create(entity);
  }
  async findAll(): Promise<any> {
    return await Customer.findAll();
  }
  async findById(entityId: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async deleteById(id: number): Promise<CustomerEntity | null> {
    throw new Error("Method not implemented.");
  }
}

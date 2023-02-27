import { DataSource, Entity, Repository } from "typeorm";
import { CustomerEntity2 } from "../../domain/entities";
import { IPersistence } from "../../domain/interfaces/IPersistence";

export class CustomerRepository implements IPersistence<CustomerEntity2> {
  constructor(private readonly repository: Repository<CustomerEntity2>) {}
  async save(entity: CustomerEntity2): Promise<CustomerEntity2 | null> {
    return await this.repository.create(entity);
  }
  async findAll(): Promise<CustomerEntity2[] | null> {
    const customers = await this.repository.find();
    return customers;
  }
  async findById(id: number): Promise<CustomerEntity2 | null> {
    const customer = await this.repository.findOneBy({ id: id });
    return customer;
  }
  async deleteById(id: number): Promise<CustomerEntity2 | null> {
    throw new Error("Method not implemented.");
  }
}

import { ObjectLiteral, Repository } from "typeorm";
import { IPersistence } from "../../domain/interfaces/IPersistence";

export class BaseRepository<T extends ObjectLiteral>
  implements IPersistence<T>
{
  constructor(private readonly repository: Repository<T>) {}
  async save(entity: T): Promise<any> {
    return await this.repository.create(entity);
  }
  async findAll(): Promise<any> {
    const customers = await this.repository.find();
    return customers;
  }
  async findById(entityId: number): Promise<any> {
    const customer = await this.repository.findOneBy({ id: entityId } as any);
    return customer;
  }
  async deleteById(id: number): Promise<T | null> {
    throw new Error("Method not implemented.");
  }
}

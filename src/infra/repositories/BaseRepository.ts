import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { CustomerEntity2 } from "../../domain/entities";
import { IPersistence } from "../../domain/interfaces/IPersistence";
import { db } from "../db/data-source";
export abstract class BaseRepository<T> implements IPersistence<T> {
  async save(entity: T): Promise<any> {
    const repository = db.getRepository(CustomerEntity2);
    return await repository.save(entity as any);
  }
  async findAll(): Promise<any> {
    const repository = db.getRepository(CustomerEntity2);
    return await repository.find();
  }

  async findById(id: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

import { IRepository } from "../../domain/interfaces/IRepository";

export abstract class BaseRepository<T> implements IRepository<T> {
  constructor() {}
  async save(entity: T): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async findAll(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async findById(id: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

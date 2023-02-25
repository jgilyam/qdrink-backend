import { PrismaClient } from "@prisma/client";
import { IRepository } from "../../domain/repositories/IRepository";

export abstract class BaseRepository<T> implements IRepository<T> {
  constructor(private readonly db: PrismaClient) {}
  saveCustomer(customer: T): Promise<T | null> {
    throw new Error("Method not implemented.");
  }
  async findAllCustomers(): Promise<any> {
    // TODO: ver como es la forma para no utilizar el any
    const customers = await this.db.customer.findMany();
    return customers;
  }
  findCustomerById(customerId: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
  deleteCustomerById(customerId: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

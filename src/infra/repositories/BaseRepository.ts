import { Prisma, PrismaClient } from "@prisma/client";
import { IRepository } from "../../domain/interfaces/IRepository";

export abstract class BaseRepository<T> implements IRepository<T> {
  constructor(private readonly db: PrismaClient) {}
  async save(customer: any): Promise<any> {
    console.log(customer);
    const data = {
      data: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
      },
    };
    const customerEntity = await this.db.customer.create(data);
    return customerEntity;
  }
  async findAll(): Promise<any> {
    // TODO: ver como es la forma para no utilizar el any
    const customers = await this.db.customer.findMany();
    return customers;
  }
  async findById(id: number): Promise<any> {
    const customer = await this.db.customer.findUnique({
      where: {
        id: id,
      },
    });
    return customer;
  }
  deleteById(id: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

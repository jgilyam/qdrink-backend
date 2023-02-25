import { PrismaClient } from "@prisma/client";
import { CustomerEntity } from "../../domain/entities/CustomerEntity";
import { ICustomerRepositry } from "../../domain/repositories/ICustomerRepository";
import { CustomerValue } from "../../domain/value/CustomerValue";

export class PrismaRepository implements ICustomerRepositry {
  constructor(private readonly db: PrismaClient) {}
  saveCustomer(customer: CustomerEntity): Promise<CustomerEntity | null> {
    throw new Error("Method not implemented.");
  }
  async findAllCustomers(): Promise<any> {
    const customers = await this.db.customer.findMany();
    return customers;
  }
  findCustomerById(customerId: number): Promise<CustomerEntity | null> {
    throw new Error("Method not implemented.");
  }
  deleteCustomerById(customerId: number): Promise<CustomerEntity | null> {
    throw new Error("Method not implemented.");
  }
}

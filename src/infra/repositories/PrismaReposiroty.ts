import { PrismaClient } from "@prisma/client";
import { CustomerEntity } from "../../domain/entities/CustomerEntity";
import { CustomerRepositry } from "../../domain/repositories/CustomerRepository";
import { CustomerValue } from "../../domain/value/CustomerValue";

export class PrismaRepository implements CustomerRepositry {
  constructor(private readonly prisma: PrismaClient) {}
  saveCustomer(customer: CustomerEntity): Promise<CustomerEntity | null> {
    throw new Error("Method not implemented.");
  }
  async findAllCustomers(): Promise<any> {
    const customers = await this.prisma.customer.findMany();
    return customers;
  }
  findCustomerById(customerId: number): Promise<CustomerEntity | null> {
    throw new Error("Method not implemented.");
  }
  deleteCustomerById(customerId: number): Promise<CustomerEntity | null> {
    throw new Error("Method not implemented.");
  }
}

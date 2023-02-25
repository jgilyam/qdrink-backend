import { CustomerEntity } from "../entities";

export interface IRepository<T> {
  saveCustomer(customer: T): Promise<T | null>;
  findAllCustomers(): Promise<T[] | null>;
  findCustomerById(customerId: number): Promise<T | null>;
  deleteCustomerById(customerId: number): Promise<T | null>;
}

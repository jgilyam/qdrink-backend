import { CustomerEntity } from "../entities";

export interface CustomerRepositry {
  saveCustomer(customer: CustomerEntity): Promise<CustomerEntity | null>;
  findAllCustomers(): Promise<CustomerEntity[] | null>;
  findCustomerById(customerId: number): Promise<CustomerEntity | null>;
  deleteCustomerById(customerId: number): Promise<CustomerEntity | null>;
}

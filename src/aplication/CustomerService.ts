import { CustomerEntity } from "../domain/entities/CustomerEntity";
import { CustomerRepositry } from "../domain/repositories/CustomerRepository";
import { CustomerValue } from "../domain/value/CustomerValue";

export class CurstomerService {
  constructor(private readonly customerRepository: CustomerRepositry) {
    console.log("constructor de service");
  }

  public addCustomer = async ({
    email,
    name,
    phone,
  }: {
    email: string;
    name: string;
    phone: string;
  }) => {
    const customerValue = new CustomerValue({ email, name, phone });
    return await this.customerRepository.saveCustomer(customerValue);
  };
  public findAllCustomers = async () => {
    console.log("estoy en sel service");
    const customers: CustomerEntity[] | null =
      await this.customerRepository.findAllCustomers();
    return customers;
  };
}

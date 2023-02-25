import { CustomerDTO } from "../domain/dtos/CustomerDTO";
import { CustomerEntity } from "../domain/entities/CustomerEntity";
import { IRepository } from "../domain/repositories/IRepository";
import { CustomerValue } from "../domain/value/CustomerValue";

export class CurstomerService {
  constructor(
    private readonly customerRepository: IRepository<CustomerEntity>
  ) {}

  public addCustomer = async ({ email, name, phone }: CustomerDTO) => {
    const customerValue = new CustomerValue({ email, name, phone });
    return await this.customerRepository.saveCustomer(customerValue);
  };
  public findAllCustomers = async () => {
    return await this.customerRepository.findAllCustomers();
  };
}

import { CustomerDTO } from "../domain/dtos/CustomerDTO";
import { CustomerEntity } from "../domain/entities/CustomerEntity";
import { IMessaging } from "../domain/interfaces/IMessaging";
import { IRepository } from "../domain/interfaces/IRepository";
import { CustomerValue } from "../domain/value/CustomerValue";

export class CurstomerService {
  constructor(
    private readonly customerRepository: IRepository<CustomerEntity>,
    private readonly messanger: IMessaging
  ) {}

  public addCustomer = async ({ email, name, phone }: CustomerDTO) => {
    const customerValue = new CustomerValue({ email, name, phone });
    return await this.customerRepository.save(customerValue);
  };
  public findAllCustomers = async () => {
    return await this.customerRepository.findAll();
  };
  public sendQr = async (customerId: number) => {
    const customer = await this.customerRepository.findById(customerId);
    if (customer == null) {
      return false;
    } else {
      return await this.messanger.sendMessage(
        customer?.phone,
        customer?.name,
        "imagen"
      );
    }
  };
}
import { CustomerDTO } from "../domain/dtos/CustomerDTO";
import { CustomerEntity } from "../domain/entities/CustomerEntity";
import { IMessaging } from "../domain/interfaces/IMessaging";
import { IPersistence } from "../domain/interfaces/IPersistence";
import { CustomerMapper } from "../domain/mappers/CustomerMapper";

export class CurstomerService {
  constructor(
    private readonly customerRepository: IPersistence<CustomerEntity>,
    private readonly messanger: IMessaging,
    private readonly customerMapper: CustomerMapper
  ) {}

  public addCustomer = async (customerDTO: CustomerDTO) => {
    const customerEntity = this.customerMapper.dtoToEntity(customerDTO);
    return await this.customerRepository.save(customerEntity);
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
  public findCustomerById = async (id: number) => {
    return this.customerRepository.findById(id);
  };

  public deleteCustomerById = async (id: number) => {
    return this.customerRepository.deleteById(id);
  };
}
import { CustomerDTO } from "../../domain/dtos/CustomerDTO";
import { CustomerEntity } from "../../domain/entities";
import { IBaseRepository } from "../../domain/interfaces/IBaseRepository";
import { ICustomerRepository } from "../../domain/interfaces/ICustomerRepository";

export class CustomerValidator {
  constructor(private readonly customerRepository: ICustomerRepository) {}

  async uniqueEmail(customerDTO: CustomerDTO): Promise<void> {
    const customer = await this.customerRepository.findCusomerByEmail(
      customerDTO.email
    );
    if (customer != null) {
      throw Error("El email ya existe");
    }
  }
}

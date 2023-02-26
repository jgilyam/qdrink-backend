import { CustomerDTO } from "../dtos/CustomerDTO";
import { CustomerEntity } from "../entities";
import { Mapper } from "./Mapper";

export class CustomerMapper implements Mapper<CustomerEntity, CustomerDTO> {
  entityToDto(entity: CustomerEntity): CustomerDTO {
    const dto: CustomerDTO = {
      email: entity.email,
      name: entity.name,
      phone: entity.phone,
    };
    return dto;
  }
  dtoToEntity(dto: CustomerDTO): CustomerEntity {
    const entity: CustomerEntity = {
      id: null,
      email: dto.email,
      name: dto.name,
      phone: dto.phone,
    };
    return entity;
  }
}

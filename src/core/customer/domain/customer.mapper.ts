import { CustomerEntity, CustomerInDTO, CustomerOutDTO } from "./";

export interface ICustomerMapper{
    customerEntityToCustomerOutDTO(customerEntity: CustomerEntity | null): CustomerOutDTO | null;
    customerInDTOToCustomerEntity(customerInDTO: CustomerInDTO): CustomerEntity;
}
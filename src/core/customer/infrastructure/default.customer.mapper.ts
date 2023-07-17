import { CustomerEntity, CustomerInDTO, CustomerOutDTO, ICustomerMapper } from "../domain";

export class CustomerMapper implements ICustomerMapper{
    constructor(){}
    customerInDTOToCustomerEntity = (customerInDTO: CustomerInDTO): CustomerEntity => {
        const {phone} = customerInDTO;
        const customerEntity: CustomerEntity = {
            phone,
            balance:0
        }
        return customerEntity
    }
    customerEntityToCustomerOutDTO = (customerEntity: CustomerEntity | null): CustomerOutDTO | null =>{
        if (!customerEntity) return null;
        const {id, balance,} = customerEntity;
        const customerOutDTO: CustomerOutDTO = {
            id,
            balance
        }
        return customerOutDTO;
    }
}
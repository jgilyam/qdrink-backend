import { CustomerEntity, CustomerOutDTO, ICustomerMapper } from "../domain";

export class CustomerMapper implements ICustomerMapper{
    constructor(){}
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
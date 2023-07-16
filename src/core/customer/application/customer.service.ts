import { ICustomerMapper, ICustomerRepository, CustomerOutDTO } from "../domain";


export class CustoemrService {
    constructor(private readonly customerRepository: ICustomerRepository, private readonly customerMapper: ICustomerMapper){}

    findByPhone = async(phone: string) : Promise<CustomerOutDTO | null>=>{
        const customer = await this.customerRepository.findByPhone(phone);
        return this.customerMapper.customerEntityToCustomerOutDTO(customer);
    }
}
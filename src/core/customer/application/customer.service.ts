import { ICustomerMapper, ICustomerRepository, CustomerOutDTO, CustomerInDTO } from "../domain";


export class CustomerService {
    constructor(private readonly customerRepository: ICustomerRepository, private readonly customerMapper: ICustomerMapper){}

    findByPhone = async(phone: string) : Promise<CustomerOutDTO | null>=>{
        const customer = await this.customerRepository.findByPhone(phone);
        return this.customerMapper.customerEntityToCustomerOutDTO(customer);
    }

    add =async (customerInDTO:CustomerInDTO): Promise<CustomerOutDTO | null> => {
        const customerEntity = this.customerMapper.customerInDTOToCustomerEntity(customerInDTO);
        const customerSaved = await this.customerRepository.save(customerEntity); 
        return this.customerMapper.customerEntityToCustomerOutDTO(customerSaved);
    }

}
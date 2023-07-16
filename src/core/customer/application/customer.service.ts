import { ICustomerMapper, ICustomerRepository, CustomerOutDTO, CustomerInDTO } from "../domain";


export class CustoemrService {
    constructor(private readonly customerRepository: ICustomerRepository, private readonly customerMapper: ICustomerMapper){}

    findByPhone = async(phone: string) : Promise<CustomerOutDTO | null>=>{
        const customer = await this.customerRepository.findByPhone(phone);
        return this.customerMapper.customerEntityToCustomerOutDTO(customer);
    }

    add =async (customerInDTO:CustomerInDTO): Promise<CustomerOutDTO | null> => {
        let customerEntity = this.customerMapper.customerInDTOToCustomerEntity(customerInDTO);
        customerEntity = {...await this.customerRepository.save(customerEntity)}
        return this.customerMapper.customerEntityToCustomerOutDTO(customerEntity)
    }

}
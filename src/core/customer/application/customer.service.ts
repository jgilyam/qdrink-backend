import { ICustomerMapper, ICustomerRepository, CustomerOutDTO, CustomerInDTO, CustomerEntity } from "../domain";
import { BalanceOperation } from "../domain/enums/operation.enum";
import { CustomerNotFoundException } from "../domain/errors/customer.notFound.exception";


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

    updateBalance = async(opration: BalanceOperation, amount: number, customerid: string) =>{
        let customer = await this.customerRepository.findById(customerid);

        if(!customer) throw new CustomerNotFoundException();

        const amountToAdd = (opration * amount) + customer.balance;
        customer.balance = amountToAdd;
        return await this.customerRepository.save(customer);
    
    }
    findById = async(customerId: string): Promise<CustomerOutDTO | null> =>{
        const customer = await this.customerRepository.findById(customerId);
        return this.customerMapper.customerEntityToCustomerOutDTO(customer);
    }
    findEntityById = async(customerId: string): Promise<CustomerEntity> =>{
        const customer =  this.customerRepository.findById(customerId);
        if(customer!==null) throw new CustomerNotFoundException();

        return customer;
    }

}
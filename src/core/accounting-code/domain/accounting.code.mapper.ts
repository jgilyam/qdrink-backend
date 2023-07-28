import { AccountingCodeEntity } from "./accounting.code.entity";
import { AccountingCodeOutDTO } from "./dtos/accounting.code.out.dto";

export interface IAccountingCodeMapper{
    customerEntityToCustomerOutDTO(customerEntity: AccountingCodeEntity | null): AccountingCodeOutDTO | null;
}
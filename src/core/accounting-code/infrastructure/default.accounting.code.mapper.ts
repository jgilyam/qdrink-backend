import { AccountingCodeEntity } from "../domain/accounting.code.entity";
import { IAccountingCodeMapper } from "../domain/accounting.code.mapper";
import { AccountingCodeOutDTO } from "../domain/dtos/accounting.code.out.dto";

export class AccountingCodeMapper implements IAccountingCodeMapper{
    customerEntityToAccountingCodeOutDTO  = (customerEntity: AccountingCodeEntity | null): AccountingCodeOutDTO | null => {
        if(!customerEntity) return null;
        const {id, name, kind, saleChannel} = customerEntity;
        const accountingCodeOutDTO: AccountingCodeOutDTO = {
            id,
            name,
            kind,
            saleChannel
        }
        return accountingCodeOutDTO;
    }

}
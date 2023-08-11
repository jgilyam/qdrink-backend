import { AccountingCodeKind, DebitCreditKind, SaleChannel } from "../domain/accounting.code.entity";
import { IAccountingCodeMapper } from "../domain/accounting.code.mapper";
import { IAccountingCodeRepository } from "../domain/accounting.code.repository";

export class AccountingCodeService {
    constructor(private readonly accountingCodeRepository: IAccountingCodeRepository, private readonly accountingCodeMapper: IAccountingCodeMapper){}
    findAll = async (kind?: DebitCreditKind, saleChannel?: SaleChannel, accountingCodeKind?: AccountingCodeKind) =>{
        const accountingCodeEntities = await this.accountingCodeRepository.findAll(kind, saleChannel, accountingCodeKind)
        return accountingCodeEntities.map(accountingCode=> this.accountingCodeMapper.customerEntityToAccountingCodeOutDTO(accountingCode));
    }
}
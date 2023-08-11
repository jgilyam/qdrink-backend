import { AccountingCodeEntity, AccountingCodeKind, DebitCreditKind, SaleChannel } from "../domain/accounting.code.entity";
import { IAccountingCodeMapper } from "../domain/accounting.code.mapper";
import { IAccountingCodeRepository } from "../domain/accounting.code.repository";
import { AccountingCodeOutDTO } from "../domain/dtos/accounting.code.out.dto";

export class AccountingCodeService {
    constructor(private readonly accountingCodeRepository: IAccountingCodeRepository, private readonly accountingCodeMapper: IAccountingCodeMapper){}
    findAll = async (kind?: DebitCreditKind, saleChannel?: SaleChannel, accountingCodeKind?: AccountingCodeKind) =>{
        const accountingCodeEntities = await this.accountingCodeRepository.findAll(kind, saleChannel, accountingCodeKind)
        return accountingCodeEntities.map(accountingCode=> this.accountingCodeMapper.customerEntityToAccountingCodeOutDTO(accountingCode));
    }

    private findAccountingCodeEntityById = async (id: string): Promise<AccountingCodeEntity> =>{
        const accoutnitngCodeEntity = await this.accountingCodeRepository.findById(id);
        if(!accoutnitngCodeEntity) throw new Error();
        
        return accoutnitngCodeEntity;
    }
    
    findById = async (id: string): Promise<AccountingCodeOutDTO | null> =>{
        const accountingCodeEntity = await this.findAccountingCodeEntityById(id);    
        return this.accountingCodeMapper.customerEntityToAccountingCodeOutDTO(accountingCodeEntity);
    }
}
import { DebitCreditKind, SaleChannel, AccountingCodeKind, AccountingCodeEntity } from "../../domain/accounting.code.entity";
import { IAccountingCodeRepository } from "../../domain/accounting.code.repository";
import { AccountingCode } from "./mongo.accounting.code.model";

export class AccounitngCodeRepository implements IAccountingCodeRepository{
    findAll = async(kind?: DebitCreditKind | undefined, saleChannel?: SaleChannel | undefined, accountingCodeKind?: AccountingCodeKind | undefined): Promise<AccountingCodeEntity[]> => {
        const filters = {};

        if(kind) Object.assign({kind});
        if(saleChannel) Object.assign({saleChannel});
        if(accountingCodeKind) Object.assign({accountingCodeKind});

        return await AccountingCode.find(filters);
    }

}
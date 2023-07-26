import { AccountingCodeEntity, AccountingCodeKind, DebitCreditKind, SaleChannel } from "./accounting.code.entity";

export interface IAccountingCodeRepository {
    findAll(kind?: DebitCreditKind, saleChannel?: SaleChannel, accountingCodeKind?: AccountingCodeKind): Promise<AccountingCodeEntity[]>;
}
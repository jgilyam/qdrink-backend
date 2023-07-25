import { AccountingCodeEntity } from "./accounting.code.entity";

export interface IAccountingCodeRepository {
    findAll(): Promise<AccountingCodeEntity[]>;
}
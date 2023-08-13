import { AccountingCodeEntity } from "../../accounting-code/domain/accounting.code.entity";
import { CustomerEntity } from "../../customer/domain";
import { TapEntity } from "../../tap/domain/tap.entity";

export interface MovementEntity{
    id: string;
    amount: number;
    paymentReference?: string;
    consumption?: Consumption;
    accountingCode: AccountingCodeEntity;
    customer?: CustomerEntity;
}

export interface Consumption{
    quantity: number;
    drinkReference: string;
    tap: TapEntity;
}
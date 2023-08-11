import { AccountingCodeOutDTO } from "../../../accounting-code/domain/dtos/accounting.code.out.dto";

export interface MovementAddDTO{
    id: string;
    amount: number;
    accountingCodeId: string;
}
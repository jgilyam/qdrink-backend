import { AccountingCodeOutDTO } from "../../../accounting-code/domain/dtos/accounting.code.out.dto";
import { CustomerOutDTO } from "../../../customer/domain";

export interface MovementOutDTO{
    id: string;
    amount: number;
    accountingCode: AccountingCodeOutDTO | null;
    customer?: CustomerOutDTO;
}
import { DebitCreditKind, SaleChannel } from "../accounting.code.entity";

export interface AccountingCodeOutDTO {
    id: string;
    name: string;
    kind: DebitCreditKind;
    saleChannel: SaleChannel;
}
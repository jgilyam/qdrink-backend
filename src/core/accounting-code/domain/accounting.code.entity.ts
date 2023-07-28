export interface AccountingCodeEntity {
    id: string;
    name: string;
    accountingCodeKind: AccountingCodeKind 
    kind: DebitCreditKind;
    saleChannel: SaleChannel;
}

export enum DebitCreditKind {
    DEBIT="DEBIT", CREDIT="CREDIT",
}

export enum SaleChannel {
    RETAIL="RETAIL", ONLINE="ONLINE"
}

export enum AccountingCodeKind {
  CREDIT_PAYMENT = "CREDIT_PAYMENT",
  CANCELED_PAYMENT = "CANCELED_PAYMENT",
  CONSUMPTION = "CONSUMPTION",
  CANCELED_CONSUMPTION = "CANCELED_CONSUMPTION",
  CREDIT_BONUS = "CREDIT_BONUS",
  CANCELED_BONUS = "CANCELED_BONUS",
}
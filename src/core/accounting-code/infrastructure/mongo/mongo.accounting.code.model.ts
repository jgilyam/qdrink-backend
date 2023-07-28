import { Schema, model } from "mongoose";
import { AccountingCodeEntity, AccountingCodeKind, DebitCreditKind, SaleChannel } from "../../domain/accounting.code.entity";

const accountingCodeSchema = new Schema<AccountingCodeEntity>({
    name: { type: String, required: true },
    kind: { type: String, enum: DebitCreditKind, required: true },
    saleChannel: { type: String, enum: SaleChannel, required: true },
    accountingCodeKind: { type: String, enum: AccountingCodeKind, required: true },
  });
  
  accountingCodeSchema.index({accountingCodeKind: 1, kind: 1, saleChannel: 1},{unique: true})
  
  export const AccountingCode = model<AccountingCodeEntity>("AccountingCode", accountingCodeSchema);
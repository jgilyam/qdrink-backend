import mongoose from "mongoose";

import { AccountingCode } from "../../core/accounting-code/infrastructure/mongo/mongo.accounting.code.model";
import { DebitCreditKind, AccountingCodeKind, SaleChannel } from "../../core/accounting-code/domain/accounting.code.entity";

require("dotenv").config();

mongoose
.connect(process.env.MONGODB_CNN ?? "")
.catch((err: any) => {
    console.log(err);
    process.exit(1);
})
.then(() => {
    console.log("connected to db in development environment");
});

const accountingCodes = [   
  new AccountingCode({
    name: "Carga de credito a online",
    kind: DebitCreditKind.CREDIT,
    saleChannel: SaleChannel.ONLINE,
    accountingCodeKind: AccountingCodeKind.CREDIT_PAYMENT
}),
new AccountingCode({
    name: "Carga de credito en bar",
    kind: DebitCreditKind.CREDIT,
    saleChannel: SaleChannel.RETAIL,
    accountingCodeKind: AccountingCodeKind.CREDIT_PAYMENT
}),
new AccountingCode({
    name: "Anulacion de credito en bar",
    kind: DebitCreditKind.DEBIT,
    saleChannel: SaleChannel.RETAIL,
    accountingCodeKind: AccountingCodeKind.CANCELED_PAYMENT
}),
new AccountingCode({
    name: "Consumo en bar",
    kind: DebitCreditKind.DEBIT,
    saleChannel: SaleChannel.RETAIL,
    accountingCodeKind: AccountingCodeKind.CONSUMPTION
}),
new AccountingCode({
    name: "Anulacion de consumo",
    kind: DebitCreditKind.CREDIT,
    saleChannel: SaleChannel.RETAIL,
    accountingCodeKind: AccountingCodeKind.CANCELED_CONSUMPTION
}),]

const seed = async()=>{
    await Promise.all(
        accountingCodes.map(async (p) => {
            await p.save()
        })
    )
}
seed()
    .then(()=>{
        console.log("DONE!");
        mongoose.disconnect();
    })
    .catch
import { AccountingCodeService } from "./application/accounting.code.service";
import { AccountingCodeMapper } from "./infrastructure/default.accounting.code.mapper"
import { MongoAccounitngCodeRepository } from "./infrastructure/mongo/mongo.accounting.code.repository";

export const accountingCodeMapper = new AccountingCodeMapper();
const accoutnignCodeRepository = new MongoAccounitngCodeRepository();
export const accoutningCodeService = new AccountingCodeService(accoutnignCodeRepository, accountingCodeMapper);
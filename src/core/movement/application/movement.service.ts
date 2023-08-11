import { AccountingCodeService } from "../../accounting-code/application/accounting.code.service";
import { DebitCreditKind } from "../../accounting-code/domain/accounting.code.entity";
import { CustomerService } from "../../customer/application/customer.service";
import { BalanceOperation } from "../../customer/domain/enums/operation.enum";
import { MovementAddDTO } from "../domain/dtos/movement.add.dto";
import { IMovementMapper } from "../domain/movement.mapper";
import { IMovementRepository } from "../domain/movement.repository";

export class MovementService{
    constructor(
        private readonly movementRepository: IMovementRepository, 
        private readonly movementMapper: IMovementMapper, 
        private readonly customerService: CustomerService, 
        private readonly accountingCodeService: AccountingCodeService){}
    getAccountingCodeService = ()=>{
        return this.accountingCodeService;
    }

    addMovementToCustomer = async(customerId: string, movementAddDTO: MovementAddDTO)=>{
        const { amount, accountingCodeId } = movementAddDTO;
        const movementEntity = await this.movementRepository.add(customerId, movementAddDTO);
        
        const accotiungCode = await this.accountingCodeService.findById(accountingCodeId);
        if(!accotiungCode) throw  new Error();
        const { kind } =  accotiungCode
        
        const operation = this.debitCreditKindToBalanceOperation(kind);
        this.customerService.updateBalance(operation, amount, customerId)
        return this.movementMapper.movementEntityToMovementOutDTO(movementEntity);
    }

    private debitCreditKindToBalanceOperation = (debitCreditKind: DebitCreditKind)=>{
        if(debitCreditKind===DebitCreditKind.CREDIT) return BalanceOperation.ADD;
        return BalanceOperation.SUBSTRACT;
    }

}
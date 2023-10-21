import { AccountingCodeService } from "../../accounting-code/application/accounting.code.service";
import { AccountingCodeKind, DebitCreditKind, SaleChannel } from "../../accounting-code/domain/accounting.code.entity";
import { CustomerService } from "../../customer/application/customer.service";
import { BalanceOperation } from "../../customer/domain/enums/operation.enum";
import { DrinkService } from "../../drink/application/drink.service";
import { TapService } from "../../tap/application/tap.service";
import { ConsuptionDTO } from "../domain/dtos/consumption.dto";
import { MovementAddDTO } from "../domain/dtos/movement.add.dto";
import { Consumption, MovementEntity } from "../domain/movement.entity";
import { IMovementMapper } from "../domain/movement.mapper";
import { IMovementRepository } from "../domain/movement.repository";

export class MovementService{
    constructor(
        private readonly movementRepository: IMovementRepository, 
        private readonly movementMapper: IMovementMapper, 
        private readonly customerService: CustomerService, 
        private readonly accountingCodeService: AccountingCodeService,
        private readonly drinkService: DrinkService,
        private readonly tapService: TapService){}
    getAccountingCodeService = ()=>{
        return this.accountingCodeService;
    }

    addMovementToCustomer = async(customerId: string, movementAddDTO: MovementAddDTO)=>{
        const { amount, accountingCodeId } = movementAddDTO;
        const movementEntity = await this.movementRepository.add(customerId, movementAddDTO);
        
        const accountingCode = await this.accountingCodeService.findById(accountingCodeId);
        if(!accountingCode) throw  new Error();
        const { kind } =  accountingCode
        
        const operation = this.debitCreditKindToBalanceOperation(kind);
        this.customerService.updateBalance(operation, amount, customerId)
        return this.movementMapper.movementEntityToMovementOutDTO(movementEntity);
    }

    chargeConsumption = async(customerId: string, consumptionDTO: ConsuptionDTO)=>{
        
        const accountingCode = await this.accountingCodeService.findOne(DebitCreditKind.DEBIT, SaleChannel.RETAIL, AccountingCodeKind.CONSUMPTION);
        const {drinkReference, quantity, tapId} = consumptionDTO;
        const drink =await this.drinkService.findById(drinkReference);
        if(!drink) throw new Error("Drink not Found");
        const{ priceLiter } = drink;

        const customer = await this.customerService.findEntityById(customerId);
        const tap = await this.tapService.findEntityById(tapId);
        
        const consumption: Consumption = {
            quantity,
            drinkReference,
            tap
        }
        const movementEntity : MovementEntity = {
            id: "",
            amount: quantity * priceLiter,
            accountingCode,
            customer,
            consumption
        } 
        const movementEntitySaved = await this.movementRepository.save(movementEntity);

        const { kind } =  accountingCode
        
        const operation = this.debitCreditKindToBalanceOperation(kind);

        const customerWithBalanceUpdated = await this.customerService.updateBalance(operation, movementEntitySaved.amount, customerId)
        movementEntitySaved.customer = customerWithBalanceUpdated;
        return this.movementMapper.movementEntityToConsuptionOudDTO(movementEntitySaved);

    }

    private debitCreditKindToBalanceOperation = (debitCreditKind: DebitCreditKind)=>{
        if(debitCreditKind===DebitCreditKind.CREDIT) return BalanceOperation.ADD;
        return BalanceOperation.SUBSTRACT;
    }

}
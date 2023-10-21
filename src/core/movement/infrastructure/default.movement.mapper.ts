import { IAccountingCodeMapper } from "../../accounting-code/domain/accounting.code.mapper";
import { ConsuptionOutDTO } from "../domain/dtos/consumption.out.dto";
import { MovementOutDTO } from "../domain/dtos/movement.out.dto";
import { MovementEntity } from "../domain/movement.entity";
import { IMovementMapper } from "../domain/movement.mapper";

export class MovementMapper implements IMovementMapper{

    constructor(private readonly accountingCodeMapper: IAccountingCodeMapper){

    }
    movementEntityToConsuptionOudDTO(movementEntity: MovementEntity | null): ConsuptionOutDTO | null {
        if(!movementEntity) return null;
        const {consumption, customer, amount,} = movementEntity;
        if(!consumption) return null;
        if(!customer) return null;

        const { drinks } = consumption.tap;
        const drinkName = drinks.find(drink=> drink?.id===consumption.drinkReference)?.name
        if(!drinkName) return null;
        const consuptionOutDTO: ConsuptionOutDTO = {
            drinkName,
            amountCharged: amount,
            quantity: consumption?.quantity,
            balance: customer?.balance
        }
        return consuptionOutDTO
    }
    movementEntityToMovementOutDTO(movementEntity: MovementEntity | null): MovementOutDTO | null {
        if(!movementEntity) return null;
        const {id, amount, accountingCode, customer} = movementEntity;
        const movementOutDTO: MovementOutDTO = {
            id,
            amount,
            accountingCode: this.accountingCodeMapper.customerEntityToAccountingCodeOutDTO(accountingCode),
            customer
        }
        return movementOutDTO;
    }

}
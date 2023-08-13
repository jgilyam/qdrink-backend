import { IAccountingCodeMapper } from "../../accounting-code/domain/accounting.code.mapper";
import { MovementOutDTO } from "../domain/dtos/movement.out.dto";
import { MovementEntity } from "../domain/movement.entity";
import { IMovementMapper } from "../domain/movement.mapper";

export class MovementMapper implements IMovementMapper{

    constructor(private readonly accountingCodeMapper: IAccountingCodeMapper){

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
import { MovementAddDTO } from "../../domain/dtos/movement.add.dto";
import { MovementEntity } from "../../domain/movement.entity";
import { IMovementRepository } from "../../domain/movement.repository";
import { Movement } from "./mongo.movement.model";

export class MongoMovementRepository implements IMovementRepository{
    add = async(customerId: string, movementAddDTO: MovementAddDTO): Promise<MovementEntity> => {
        const movementEntity = new Movement({
            ...movementAddDTO,
            customer: customerId
        });
        return await movementEntity.save();
    }
    save = async(movementEntity: MovementEntity): Promise<MovementEntity> => {
        const result = new Movement({
            ...movementEntity,

        });
        return await result.save();
    }
}
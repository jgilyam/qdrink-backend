import { MovementAddDTO } from "./dtos/movement.add.dto";
import { MovementEntity } from "./movement.entity";

export interface IMovementRepository{
    add(customerId: string, movementAddDTO: MovementAddDTO): Promise<MovementEntity>;
}
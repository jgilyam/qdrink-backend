import { MovementOutDTO } from "./dtos/movement.out.dto";
import { MovementEntity } from "./movement.entity";

export interface IMovementMapper{
    movementEntityToMovementOutDTO(movementEntity: MovementEntity | null): MovementOutDTO | null
}
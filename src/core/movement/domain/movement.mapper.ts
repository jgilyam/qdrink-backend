import { ConsuptionOutDTO } from "./dtos/consumption.out.dto";
import { MovementOutDTO } from "./dtos/movement.out.dto";
import { MovementEntity } from "./movement.entity";

export interface IMovementMapper{
    movementEntityToMovementOutDTO(movementEntity: MovementEntity | null): MovementOutDTO | null;
    movementEntityToConsuptionOudDTO(movementEntity: MovementEntity | null): ConsuptionOutDTO | null;
}
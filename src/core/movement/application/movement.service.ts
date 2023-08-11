import { MovementAddDTO } from "../domain/dtos/movement.add.dto";
import { IMovementMapper } from "../domain/movement.mapper";
import { IMovementRepository } from "../domain/movement.repository";

export class MovementService{
    constructor(private readonly movementRepository: IMovementRepository, private readonly movementMapper: IMovementMapper){}

    addMovement = async(customerId: string, movementAddDTO: MovementAddDTO)=>{
        const movementEntity = await this.movementRepository.add(customerId, movementAddDTO);
        return this.movementMapper.movementEntityToMovementOutDTO(movementEntity);
    }

}
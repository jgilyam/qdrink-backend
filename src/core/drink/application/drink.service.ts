import { DrinkEntity } from "../domain/drink.entity";
import { IDrinkMapper } from "../domain/drink.mapper";
import { IDrinkRepository } from "../domain/drink.repository";
import { DrinkAddDTO } from "../domain/dtos/drink.add.dto";
import { DrinkOutDTO } from "../domain/dtos/drink.out.dto";

export class DrinkService{
    constructor(private readonly drinkRepository: IDrinkRepository, private drinkMapper: IDrinkMapper){}
    
    add = async (drinkAddDTO: DrinkAddDTO): Promise<DrinkOutDTO>=>{
        const drinkEntity = await this.drinkRepository.add(drinkAddDTO);
        return this.drinkMapper.drinkEntityToDrinkOutDTO(drinkEntity);
    }
}
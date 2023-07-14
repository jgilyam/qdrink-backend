import { DrinkEntity } from "../domain/drink.entity";
import { IDrinkMapper } from "../domain/drink.mapper";
import { DrinkOutDTO } from "../domain/dtos/drink.out.dto";

export class DrinkMapper implements IDrinkMapper{
    constructor(){}
    drinkEntityToDrinkOutDTO(drinkEntity: DrinkEntity | null): DrinkOutDTO | null {
        if (!drinkEntity) return null;
        const {id, name, description, priceLiter, alcoholContent} = drinkEntity;
        const drinkOutDTO: DrinkOutDTO = {
            id,
            name,
            description,
            priceLiter,
            alcoholContent
        }
        return drinkOutDTO;
    }
}
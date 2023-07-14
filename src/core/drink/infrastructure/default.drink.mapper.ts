import { DrinkEntity, IDrinkMapper, DrinkOutDTO } from "../domain";

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
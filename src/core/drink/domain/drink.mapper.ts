import { DrinkEntity, DrinkOutDTO} from "./";

export interface IDrinkMapper{
    drinkEntityToDrinkOutDTO(drinkEntity: DrinkEntity | null): DrinkOutDTO | null
}
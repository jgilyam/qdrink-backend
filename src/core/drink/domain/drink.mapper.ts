import { DrinkEntity } from "./drink.entity";
import { DrinkOutDTO } from "./dtos/drink.out.dto";

export interface IDrinkMapper{
    drinkEntityToDrinkOutDTO(drinkEntity: DrinkEntity | null): DrinkOutDTO | null
}
import { DrinkEntity } from "./drink.entity";
import { DrinkAddDTO } from "./dtos/drink.add.dto";

export interface IDrinkRepository{
    add(drinkAddDTO: DrinkAddDTO): Promise<DrinkEntity>
}
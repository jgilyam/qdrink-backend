import { DrinkEntity } from "./drink.entity";
import { DrinkAddDTO } from "./dtos/drink.add.dto";

export interface IDrinkRepository{
    add(drinkAddDTO: DrinkAddDTO): Promise<DrinkEntity>;
    findAll(): Promise<DrinkEntity[]>;
    edit(id: string, drinkAddDTO: DrinkAddDTO): Promise<DrinkEntity | null>;
    findById(id: string): Promise<DrinkEntity | null>;
    deleteById(id: string): Promise<DrinkEntity | null>;
}
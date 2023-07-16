import { DrinkEntity, DrinkInDTO } from "./";

export interface IDrinkRepository{
    add(drinkAddDTO: DrinkInDTO): Promise<DrinkEntity>;
    findAll(): Promise<DrinkEntity[]>;
    edit(id: string, drinkAddDTO: DrinkInDTO): Promise<DrinkEntity | null>;
    findById(id: string): Promise<DrinkEntity | null>;
    deleteById(id: string): Promise<DrinkEntity | null>;
}
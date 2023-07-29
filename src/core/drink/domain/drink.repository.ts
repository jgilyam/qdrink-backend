import { DrinkEntity, DrinkInDTO } from "./";

export interface IDrinkRepository{
    add(salePointId: string, drinkAddDTO: DrinkInDTO): Promise<DrinkEntity>;
    findAll(salePointId: string): Promise<DrinkEntity[]>;
    edit(id: string, drinkAddDTO: DrinkInDTO): Promise<DrinkEntity | null>;
    findById(id: string): Promise<DrinkEntity | null>;
    deleteById(id: string): Promise<DrinkEntity | null>;
}
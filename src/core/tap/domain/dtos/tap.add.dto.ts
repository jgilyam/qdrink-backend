import { DrinkOutDTO } from "../../../drink/domain";

export interface TapAddDTO{
    id: string;
    unitNumber: number;
    drinkIds?: number[];
}
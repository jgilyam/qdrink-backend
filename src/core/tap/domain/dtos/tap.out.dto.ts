import { DrinkOutDTO } from "../../../drink/domain";

export interface TapOutDTO{
    id: string;
    unitNumber: number;
    drinks?: DrinkOutDTO[];
}
import { DrinkEntity } from "../../drink/domain";

export interface TapEntity {
    id: string;
    unitNumber: number;
    drinks: (DrinkEntity | null)[];
}
import { DrinkEntity } from "../../drink/domain";
import { SalePointEntity } from "../../sale-point/domain/sale.point.entity";

export interface TapEntity {
    id: string;
    unitNumber: number;
    drinks: (DrinkEntity | null)[];
    salePoint: SalePointEntity;
}
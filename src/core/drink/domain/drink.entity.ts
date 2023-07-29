import { SalePointEntity } from "../../sale-point/domain/sale.point.entity";

export interface DrinkEntity{
    id?: string;
    name: string;
    description: string;
    priceLiter: number;
    image?: string;
    ibu?: string;
    alcoholContent: string;
    salePoint: SalePointEntity;
}
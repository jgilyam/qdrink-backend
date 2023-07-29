import { SalePointOutDTO } from "./dtos/sale.point.out.dto";
import { SalePointEntity } from "./sale.point.entity";

export interface ISalePointMapper{
    salePointEntityToSalePointOutDTO(salePointEntity: SalePointEntity | null): SalePointOutDTO | null
}
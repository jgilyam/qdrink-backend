import { SalePointOutDTO } from "../domain/dtos/sale.point.out.dto";
import { SalePointEntity } from "../domain/sale.point.entity";
import { ISalePointMapper } from "../domain/sale.point.mapper";

export class SalePointMapper implements ISalePointMapper{
    constructor(){}
    salePointEntityToSalePointOutDTO(salePointEntity: SalePointEntity | null): SalePointOutDTO | null {
        if (!salePointEntity) return null;
        const {id, name, adrress} = salePointEntity;
        const salePointOutDTO: SalePointOutDTO = {
            id,
            name,
            adrress,
        }
        return salePointOutDTO;
    }
}
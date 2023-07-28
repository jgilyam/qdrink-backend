import { SalePointAddDTO } from "./dtos/sale.point.add.dto";
import { SalePointEntity } from "./sale.point.entity";

export interface ISalePointRepository {
    add(salePointAddDO: SalePointAddDTO): Promise<SalePointEntity>;
    findById(id: string): Promise<SalePointEntity | null>;
}
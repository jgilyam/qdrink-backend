import { SalePointAddDTO } from "../../domain/dtos/sale.point.add.dto";
import { SalePointEntity } from "../../domain/sale.point.entity";
import { ISalePointRepository } from "../../domain/sale.point.repository";

export class  MongoSalePointRepository implements ISalePointRepository{
    add(salePointAddDO: SalePointAddDTO): Promise<SalePointEntity> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<SalePointEntity | null> {
        throw new Error("Method not implemented.");
    }

}
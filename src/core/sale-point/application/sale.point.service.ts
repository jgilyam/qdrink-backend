import { SalePointAddDTO } from "../domain/dtos/sale.point.add.dto";
import { SalePointOutDTO } from "../domain/dtos/sale.point.out.dto";
import { SalePointNotFoundException } from "../domain/errors/sale.point.notFound.exception";
import { SalePointEntity } from "../domain/sale.point.entity";
import { ISalePointMapper } from "../domain/sale.point.mapper";
import { ISalePointRepository } from "../domain/sale.point.repository";

export class SalePointService {
    
    constructor(private readonly salePointRepository: ISalePointRepository, private readonly salePointMapper: ISalePointMapper){}

    add = async (salePointAddDTO: SalePointAddDTO): Promise<SalePointOutDTO | null> => {

        // TODO: hashear pass
        const salePointEntity = await this.salePointRepository.add(salePointAddDTO);
        return this.salePointMapper.salePointEntityToSalePointOutDTO(salePointEntity);
    };

    private findSalePointEntityById = async (id: string): Promise<SalePointEntity> =>{
        const salePointEntity = await this.salePointRepository.findById(id);
        if(!salePointEntity) throw new SalePointNotFoundException();
        
        return salePointEntity;
    }
    
    findById = async (id: string): Promise<SalePointOutDTO | null> =>{
        const salePointEntity = await this.findSalePointEntityById(id);    
        return this.salePointMapper.salePointEntityToSalePointOutDTO(salePointEntity);
    }
    
}
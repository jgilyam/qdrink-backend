import { TapAddDTO } from "../domain/dtos/tap.add.dto";
import { TapOutDTO } from "../domain/dtos/tap.out.dto";
import { MoreThanTwoDrinksExcpetion } from "../domain/errors/tap.moreThanTwoDrinks.exception";
import { ITapMapper } from "../domain/tap.mapper";
import { ITapRepository } from "../domain/tap.repository";

export class TapService {
    
    constructor(private readonly tapRepository: ITapRepository, private readonly tapMapper: ITapMapper){}

    add = async(tapAddDto: TapAddDTO): Promise<TapOutDTO | null>=>{
        const { drinkIds } = tapAddDto;
        
        if(drinkIds && drinkIds?.length > 2) throw new MoreThanTwoDrinksExcpetion();
        const tapEntity = await this.tapRepository.add(tapAddDto);
    
        return this.tapMapper.tapEntityToTapOutDTO(tapEntity);

    }

    findByUnitNumber = async(unitNumber: number): Promise<TapOutDTO | null> =>{
        const tapEntity = await this.tapRepository.findByUnitNumber(unitNumber);
        return this.tapMapper.tapEntityToTapOutDTO(tapEntity);
    }

}
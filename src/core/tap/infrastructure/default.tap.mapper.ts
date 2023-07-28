import { DrinkOutDTO, IDrinkMapper } from "../../drink/domain";
import { TapOutDTO } from "../domain/dtos/tap.out.dto";
import { TapEntity } from "../domain/tap.entity";
import { ITapMapper } from "../domain/tap.mapper";

export class TapMapper implements ITapMapper {
    constructor(private readonly drinkMapper: IDrinkMapper){}
    tapEntityToTapOutDTO = (tapEntity: TapEntity | null): TapOutDTO | null => {
        if(!tapEntity) return null;
        const { id, unitNumber, drinks } = tapEntity;

        const tapOutDTO: TapOutDTO = {
            id,
            unitNumber,
            drinks: drinks.map(drink=>this.drinkMapper.drinkEntityToDrinkOutDTO(drink))
        }
        return tapOutDTO;
    }

}
import { TapOutDTO } from "./dtos/tap.out.dto";
import { TapEntity } from "./tap.entity";

export interface ITapMapper{
    tapEntityToTapOutDTO(tapEntity: TapEntity | null): TapOutDTO | null
}
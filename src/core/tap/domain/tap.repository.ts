import { TapAddDTO } from "./dtos/tap.add.dto";
import { TapEntity } from "./tap.entity";

export interface ITapRepository {
    findByUnitNumber(unitNumber: number): Promise<TapEntity | null>;
    add(tapInDto: TapAddDTO): Promise<TapEntity>;
}
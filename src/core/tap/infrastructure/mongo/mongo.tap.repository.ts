import { TapAddDTO } from "../../domain/dtos/tap.add.dto";
import { TapEntity } from "../../domain/tap.entity";
import { ITapRepository } from "../../domain/tap.repository";
import { Tap } from "./mongo.tap.model";

export class MongoTapRepository implements ITapRepository {
    findByUnitNumber = async (unitNumber: number): Promise<TapEntity | null> => {
        const tap = await Tap.findOne({unitNumber})
        return tap;
    }
    add = async(tapInDto: TapAddDTO): Promise<TapEntity> => {
        const tap = new Tap({
            ...tapInDto,
        });
        return await tap.save();
    }

}
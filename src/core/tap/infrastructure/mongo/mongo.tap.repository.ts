import { TapAddDTO } from "../../domain/dtos/tap.add.dto";
import { TapEntity } from "../../domain/tap.entity";
import { ITapRepository } from "../../domain/tap.repository";
import { Tap } from "./mongo.tap.model";

export class MongoTapRepository implements ITapRepository {
    findByUnitNumber = async (unitNumber: number): Promise<TapEntity | null> => {
        const tap = await Tap
        .findOne({unitNumber})        
        .populate("drinks")
        ;
        
        if(!tap) return tap;
        
        return await tap.populate("salePoint");
    }

    add = async(salePointId: string, tapInDto: TapAddDTO): Promise<TapEntity> => {
        const {drinkIds, unitNumber} = tapInDto
        const tap = new Tap({
            unitNumber,
            drinks: drinkIds,
            salePoint: salePointId
        });
        const result = await tap.save();
        return await result.populate("drinks");
    }

    findById = async (tapId: string): Promise<TapEntity | null> => {
        const tap = await Tap
        .findById(tapId)
        .populate("drinks")
        .populate("salePoint");

        if(!tap) return tap;
        
        return tap;
    }

}
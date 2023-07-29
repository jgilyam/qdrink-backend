import { DrinkEntity } from "../../domain/drink.entity";
import { IDrinkRepository, DrinkInDTO } from "../../domain";
import { Drink } from "./mongo.drink.model";

export class MongoDrinkRepository implements IDrinkRepository {
  add = async (salePointId: string, drinkAddDTO: DrinkInDTO): Promise<DrinkEntity> => {
    const drinkEntity = new Drink({
      ...drinkAddDTO,
      salePoint: salePointId
    });
    return await drinkEntity.save();
  };

  findAll = async (salePointId: string): Promise<DrinkEntity[]> => {
    return await Drink.find({salePoint: salePointId});
  }
  
  edit = async (id: string, drinkAddDTO: DrinkInDTO): Promise<DrinkEntity | null> => {
    await Drink.findByIdAndUpdate(id, {
      ...drinkAddDTO,
    });
    return this.findById(id);
  };

  findById = async (id: string): Promise<DrinkEntity | null> => {
    return await Drink.findById(id);
  }

  deleteById = async (id: string): Promise<DrinkEntity | null> => {
    return await Drink.findByIdAndDelete(id);
  }
}

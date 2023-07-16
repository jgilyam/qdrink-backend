import { DrinkEntity } from "../../domain/drink.entity";
import { IDrinkRepository, DrinkInDTO } from "../../domain";
import { Drink } from "./mongo.drink.model";

export class MongoDrinkRepository implements IDrinkRepository {
  add = async (drinkAddDTO: DrinkInDTO): Promise<DrinkEntity> => {
    const drinkEntity = new Drink({
      ...drinkAddDTO,
    });
    return await drinkEntity.save();
  };

  findAll = async (): Promise<DrinkEntity[]> => {
    return await Drink.find();
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

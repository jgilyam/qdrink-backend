import { DrinkEntity } from "../../domain/drink.entity";
import { IDrinkRepository } from "../../domain/drink.repository";
import { DrinkAddDTO } from "../../domain/dtos/drink.add.dto";
import { Drink } from "./mongo.drink.model";

export class MongoDrinkRepository implements IDrinkRepository {
  add = async (drinkAddDTO: DrinkAddDTO): Promise<DrinkEntity> => {
    const drinkEntity = new Drink({
      ...drinkAddDTO,
    });
    return await drinkEntity.save();
  };
}

import { DrinkEntity } from "../domain/drink.entity";
import { IDrinkRepository } from "../domain/drink.repository";
import { DrinkAddDTO } from "../domain/dtos/drink.add.dto";

export class MongoDrinkRepository implements IDrinkRepository{
    add = async (drinkAddDTO: DrinkAddDTO): Promise<DrinkEntity> => {
        const drinkEntity: DrinkEntity = {
            name: "Honey",
            description: "La mejor",
            priceLiter: 2,
            alcoholContent: "% 32"
        }
        return drinkEntity;
    }

}
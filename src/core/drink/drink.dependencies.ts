import { DrinkService } from "./application/drink.service";
import { DrinkMapper } from "./infrastructure/default.drink.mapper";
import { DrinkController } from "./infrastructure/http/drink.controller";
import { MongoDrinkRepository } from "./infrastructure/mongo.drink.repository";

export const mongoDrinkRepository = new MongoDrinkRepository();
export const drinkMapper = new DrinkMapper();
export const drinkService = new DrinkService(mongoDrinkRepository, drinkMapper);

export const drinkController = new DrinkController(drinkService);
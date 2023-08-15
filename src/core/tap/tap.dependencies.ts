import { TapMapper } from "./infrastructure/default.tap.mapper";
import { MongoTapRepository } from "./infrastructure/mongo/mongo.tap.repository";
import {drinkMapper} from "../drink/drink.dependencies"
import { TapService } from "./application/tap.service";
import { TapController } from "./infrastructure/http/tap.controller";

const mongoTapRepository = new MongoTapRepository();
const tapMapper = new TapMapper(drinkMapper);
export const tapService = new TapService(mongoTapRepository, tapMapper);

export const tapController = new TapController(tapService);
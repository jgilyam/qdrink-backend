import { MovementService } from "./application/movement.service";
import { MovementMapper } from "./infrastructure/default.movement.mapper";
import { accountingCodeMapper, accoutningCodeService } from "../accounting-code/accounting.code.dependencies"
import { MongoMovementRepository } from "./infrastructure/mongo/mongo.movement.repository";
import { customerService } from "../customer/customer.dependencies";
import { MovementController } from "./infrastructure/http/movement.controller";
import { drinkService } from "../drink/drink.dependencies";
import { tapService } from "../tap/tap.dependencies";

export const movementMapper = new MovementMapper(accountingCodeMapper);
export const movementRepository = new MongoMovementRepository();
export const movementService = new MovementService(movementRepository, movementMapper, customerService, accoutningCodeService, drinkService, tapService);
export const movementController = new MovementController(movementService);
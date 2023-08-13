import { MovementService } from "./application/movement.service";
import { MovementMapper } from "./infrastructure/default.movement.mapper";
import { accountingCodeMapper, accoutningCodeService } from "../accounting-code/accounting.code.dependencies"
import { MongoMovementRepository } from "./infrastructure/mongo/mongo.movement.repository";
import { customerService } from "../customer/dependencies";

export const movementMapper = new MovementMapper(accountingCodeMapper);
export const movementRepository = new MongoMovementRepository();
export const movementService = new MovementService(movementRepository, movementMapper, customerService, accoutningCodeService);
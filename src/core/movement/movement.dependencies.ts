import { MovementService } from "./application/movement.service";
import { MovementMapper } from "./infrastructure/default.movement.mapper";
import { accountingCodeMapper } from "../accounting-code/accounting.code.dependencies"
import { MongoMovementRepository } from "./infrastructure/mongo/mongo.movement.repository";

export const movementMapper = new MovementMapper(accountingCodeMapper);
export const movementRepository = new MongoMovementRepository();
export const movementService = new MovementService(movementRepository, movementMapper);
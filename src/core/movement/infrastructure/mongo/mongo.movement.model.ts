import { Schema, model } from "mongoose";
import { MovementEntity } from "../../domain/movement.entity";


const movementSchema = new Schema<MovementEntity>({
    amount: { type: Number, required: true },
    paymentReference: { type: String, required: false },
    consumption: { type: Schema.Types.Mixed, required: false },
    accountingCode: { type: Schema.Types.ObjectId, ref: "AccountingCode", required: true },
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: false },
  });
  
  export const Movement = model<MovementEntity>("Movement", movementSchema);
import { Schema, model } from "mongoose";
import { TapEntity } from "../../domain/tap.entity";

const tapSchema = new Schema<TapEntity>({
    unitNumber: { type: Number, required: true },
    drinks: { type: Schema.Types.ObjectId, ref: "Drink", required: true },
});
  
tapSchema.index({unitNumber: 1},{unique: true})

export const Tap = model<TapEntity>("Tap", tapSchema);
import { Schema, model } from "mongoose";
import { TapEntity } from "../../domain/tap.entity";
import { SalePoint } from "../../../sale-point/infrastructure/mongo/mongo.sale.point.model";

const tapSchema = new Schema<TapEntity>({
    unitNumber: { type: Number, required: true },
    drinks: [{ type: Schema.Types.ObjectId, ref: "Drink", required: true }],
    salePoint: { type: Schema.Types.ObjectId, ref: SalePoint, required: true }
});
  
tapSchema.index({unitNumber: 1},{unique: true})

export const Tap = model<TapEntity>("Tap", tapSchema);
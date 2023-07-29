import { Schema, model } from "mongoose";
import { SalePointEntity } from "../../domain/sale.point.entity";


const salePointSchema = new Schema<SalePointEntity>({
    name: { type: String, required: true },
    adrress: { type: String, required: false },
    passwordForTaps: { type: String, required: true },
});
  
export const SalePoint = model<SalePointEntity>("SalePoint", salePointSchema);
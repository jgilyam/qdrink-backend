import { Schema, model } from "mongoose";
import { DrinkEntity } from "../../domain";

const drinkSchema = new Schema<DrinkEntity>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    priceLiter: { type: Number, required: true },
    image: { type: String, required: false },
    ibu: { type: String, required: false },
    alcoholContent: { type: String, required: true },
    salePoint: { type: Schema.Types.ObjectId, ref: "SalePoint", required: true },
  });
  
  export const Drink = model<DrinkEntity>("Drink", drinkSchema);
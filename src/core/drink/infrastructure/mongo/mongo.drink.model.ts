import { Schema, model } from "mongoose";
import { DrinkEntity } from "../../domain/drink.entity";

const drinkSchema = new Schema<DrinkEntity>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    priceLiter: { type: Number, required: true },
    image: { type: String, required: false },
    ibu: { type: String, required: false },
    alcoholContent: { type: String, required: true },
  });
  
  export const Drink = model<DrinkEntity>("Drink", drinkSchema);
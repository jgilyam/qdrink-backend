import { Schema, model } from "mongoose";
import { CustomerEntity } from "../../domain";

const customerSchema = new Schema<CustomerEntity>({
    name: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: true },
    birthdate: { type: Date, required: false },
    balance: { type: Number, required: true },
  });
  
  export const Customer = model<CustomerEntity>("Customer", customerSchema);

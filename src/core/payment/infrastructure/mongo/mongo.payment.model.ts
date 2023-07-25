import { Schema, model } from "mongoose";
import { PaymentEntity, PaymentStatus } from "../../domain";

const paymentSchema = new Schema<PaymentEntity>({
  paymentStatus: { type: Number, enum: PaymentStatus, required: true },
  amount: { type: Number, required: true },
  customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
  externalServiceData: { type: Schema.Types.Mixed, required: false },
});

export const Payment = model<PaymentEntity>("Payment", paymentSchema);

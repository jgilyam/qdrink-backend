import { PaymentStatus } from "..";

export interface PaymentAddDTO{
    id?: string;
    paymentStatus: PaymentStatus;
    amount: number;
    customerId: string;
}
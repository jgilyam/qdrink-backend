import { PaymentRequestAddDto } from "./dtos/payment.request.add.dto";

export interface IPaymentStrategy{
    createPaymentRequest(paymentRequest: PaymentRequestAddDto, userId: string): Promise<string>;
}
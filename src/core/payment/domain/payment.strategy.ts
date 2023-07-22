import { PaymentRequestAddDto } from "./dtos/payment.request.add.dto";

export interface PaymentStrategy{
    createPaymentRequest(paymentRequest: PaymentRequestAddDto): void;
}
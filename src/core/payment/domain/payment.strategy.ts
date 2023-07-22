import { PaymentRequestAddDto } from "./dtos/payment.request.add.dto";

export interface IPaymentStrategy{
    createPaymentRequest(paymentRequest: PaymentRequestAddDto): Promise<void>;
}
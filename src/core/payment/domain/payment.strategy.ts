import { ExternalServiceData } from ".";
import { PaymentAddDTO } from "./dtos";

export interface IPaymentStrategy{
    createPaymentRequest(paymentRequest: PaymentAddDTO, userId: string, phone: string): Promise<string>;
    findPaymentsDetailById(externalPaymentId: string): Promise<ExternalServiceData>
}
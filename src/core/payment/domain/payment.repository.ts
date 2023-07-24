import { PaymentAddDTO } from "./dtos";
import { PaymentEntity } from "./payment.entity";

export interface IPaymentRepository{
    add(paymentAddDTO: PaymentAddDTO): Promise<PaymentEntity | null>
    edit(id: string, paymentAddDTO: PaymentAddDTO): Promise<PaymentEntity | null>;
}
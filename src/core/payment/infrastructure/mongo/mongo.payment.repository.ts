import { IPaymentRepository, PaymentAddDTO, PaymentEntity } from "../../domain";
import { Payment } from "./mongo.payment.model";

export class MongoPaymentRepository implements IPaymentRepository{
    findById = async (id: string): Promise<PaymentEntity | null> => {
        return await Payment.findById(id);
    }
    update = async (paymentEntity: PaymentEntity): Promise<PaymentEntity | null> =>   {
        const paymentEdited = await Payment.findByIdAndUpdate(paymentEntity.id,{...paymentEntity}, {new: true})
        return paymentEdited;
    }
    add = async (paymentAddDTO: PaymentAddDTO): Promise<PaymentEntity | null> => {
        const paymentEntity = new Payment({
            customer: paymentAddDTO.customerId,
            ...paymentAddDTO,
          });
          
          return await paymentEntity.save(); 
    }
    edit(id: string, paymentAddDTO: PaymentAddDTO): Promise<PaymentEntity | null> {
        throw new Error("Method not implemented.");
    }
    
}
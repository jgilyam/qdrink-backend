import { CustomerEntity } from "../../customer/domain";

export interface PaymentEntity{
    id?: string;
    idFromPaymentService: string;
    paymentStatus: string;
    amount: string;
    customer: CustomerEntity;
    //
    client_id: string;
    collector_id: number;
    date_created: string;
    init_point: string;
    operation_type: string;
    
}
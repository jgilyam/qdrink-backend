import { CustomerEntity } from "../../customer/domain";

export interface PaymentEntity{
    id: string;
    paymentStatus: PaymentStatus;
    amount: number;
    customer: CustomerEntity;
    externalServiceData?: ExternalServiceData;    
}
export interface ExternalServiceData{
    idFromPaymentService: string;
    clientIdd: string;
    collectorId: number;
    dateCreated: string;
    initPoint: string;
    operationType: string;
}

export enum PaymentStatus{
    APPROVED, PENDING, REJECTED
}
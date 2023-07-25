import { CustomerEntity } from "../../customer/domain";

export interface PaymentEntity{
    id: string;
    paymentStatus: PaymentStatus;
    amount: number;
    customer: CustomerEntity;
    externalServiceData?: ExternalServiceData;    
}
export interface ExternalServiceData{
    allExternalData: any;
    utilExternalData: UtilExternalData
}
export interface UtilExternalData {
    transactionAmount: number,
    status: string,
    statusDetail: string,
    externalId: string,    
}


export enum PaymentStatus{
    APPROVED, PENDING, REJECTED, CANCELLED
}
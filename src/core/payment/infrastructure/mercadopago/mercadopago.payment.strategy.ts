import { CreatePreferencePayload, PreferenceItem } from "mercadopago/models/preferences/create-payload.model";
import {mercadopago} from "./mercadopago.config";
import { PaymentAddDTO, IPaymentStrategy, ExternalServiceData, UtilExternalData, PaymentStatus } from "../../domain";
import { config } from "../../../../config/config";



export class MercadoPagoPaymentStrategy implements IPaymentStrategy {
    convertPaymentStatus(externalPaymentStatus: string): PaymentStatus {
        switch (externalPaymentStatus) {
            case 'pending':
                return PaymentStatus.PENDING
            case 'approved':
                return PaymentStatus.APPROVED
            case 'rejected':
                return PaymentStatus.REJECTED
            case 'cancelled':
                return PaymentStatus.CANCELLED        
            default:
                return PaymentStatus.PENDING
        }
    }
    findPaymentsDetailById = async (externalPaymentId: string): Promise<ExternalServiceData> => {
        const id = parseInt(externalPaymentId, 10);
        const response = await mercadopago.payment.get(id);
        const { body } = response
        const utilExternalData: UtilExternalData = {
            transactionAmount: body.transaction_amount,
            status: body.status,
            statusDetail: body.status_detail,
            externalId: body.id,
        }
        return {allExternalData: body, utilExternalData};
    }
    createPaymentRequest = async(paymentRequest: PaymentAddDTO, paymentId: string, phone: string): Promise<string> => {
        const { amount } = paymentRequest
        
        const preferenceItem: PreferenceItem = {
            title: `Qdrink - Recarga usuario: ${phone}`,
            quantity: 1,
            currency_id: 'ARS',
            unit_price: amount
        }
        const payload : CreatePreferencePayload = {
            items:[preferenceItem],
            notification_url: `${config.host}/api/payments/${paymentId}/notifications`
        }
         const response = await mercadopago.preferences.create(payload)
         console.log(`Respuesta from mercadopago
         ----------------------
         ${JSON.stringify(response, undefined, 2)}
         ----------------------`)
        return response.body.init_point as string;
    }

}
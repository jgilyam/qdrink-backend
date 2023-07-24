import { CreatePreferencePayload, PreferenceItem } from "mercadopago/models/preferences/create-payload.model";
import {mercadopago} from "./mercadopago.config";
import { PaymentAddDTO, IPaymentStrategy, ExternalServiceData } from "../../domain";
import { config } from "../../../../config/config";


export class MercadoPagoPaymentStrategy implements IPaymentStrategy{
    findPaymentsDetailById = async (externalPaymentId: string): Promise<ExternalServiceData> => {
        throw new Error("Method not implemented.");
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
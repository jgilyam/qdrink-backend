import { CreatePreferencePayload, PreferenceItem } from "mercadopago/models/preferences/create-payload.model";
import { PaymentRequestAddDto } from "../../domain/dtos/payment.request.add.dto";
import { IPaymentStrategy } from "../../domain/payment.strategy";
import {mercadopago} from "./mercadopago.config";


export class MercadoPagoPaymentStrategy implements IPaymentStrategy{
    createPaymentRequest = async(paymentRequest: PaymentRequestAddDto, userId: string): Promise<string> => {
        const {title, quantity, currency_id, unit_price} = paymentRequest
        
        const preferenceItem: PreferenceItem = {
            title,
            quantity,
            currency_id: 'ARS',
            unit_price
        }
        const payload : CreatePreferencePayload = {
            items:[preferenceItem],
            notification_url: `https://756b-190-176-67-100.ngrok-free.app/api/payments/webHook/${userId}`
        }
         const response = await mercadopago.preferences.create(payload)
         console.log(`Respuesta from mercadopago
         ----------------------
         ${JSON.stringify(response, undefined, 2)}
         ----------------------`)
        return response.body.init_point;
    }

}
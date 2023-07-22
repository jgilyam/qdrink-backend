import { CreatePreferencePayload, PreferenceItem } from "mercadopago/models/preferences/create-payload.model";
import { PaymentRequestAddDto } from "../../domain/dtos/payment.request.add.dto";
import { IPaymentStrategy } from "../../domain/payment.strategy";
import {mercadopago} from "./mercadopago.config";


export class MercadoPagoPaymentStrategy implements IPaymentStrategy{
    createPaymentRequest = async(paymentRequest: PaymentRequestAddDto): Promise<void> => {
        const {title, quantity, currency_id, unit_price} = paymentRequest
        
        const preferenceItem: PreferenceItem = {
            title,
            quantity,
            currency_id: 'ARS',
            unit_price
        }
        const payload : CreatePreferencePayload = {
            items:[preferenceItem]
        }
         const response = await mercadopago.preferences.create(payload)
         console.log(`Respuesta from mercadopago
         ----------------------
         ${JSON.stringify(response, undefined, 2)}
         ----------------------`)

    }

}
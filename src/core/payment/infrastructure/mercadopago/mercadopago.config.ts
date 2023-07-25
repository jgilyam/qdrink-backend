import mercadopago from "mercadopago";
import { config } from "../../../../config/config";

mercadopago.configure({
    access_token: config.mercadoPagoAccessToken,
})

export  {mercadopago };
export const config = {
    secretJwt: process.env.SECRET_JWT || " ",
    mercadoPagoAccessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || " ",
    host: process.env.HOST || " ",
    mongoDBConnection: process.env.MONGODB_CNN || ""
}
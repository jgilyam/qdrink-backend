import { Client, ClientOptions, LocalAuth } from "whatsapp-web.js";
import dotenv from "dotenv"

dotenv.config()

export const apiWhatsappEnabled: boolean  = JSON.parse(process.env.API_WHATSAPP_BUSSINES_ENABLED || "false");
console.log(`apiWhatsappEnabled: ${apiWhatsappEnabled}`)
const options: ClientOptions = {
    authStrategy: new LocalAuth()
  }
export const whatsappWebClient = new Client(options);

if(!apiWhatsappEnabled){
    whatsappWebClient.initialize();
}
 
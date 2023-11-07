import { ClientOptions, LocalAuth, Client, MessageMedia } from "whatsapp-web.js";


const apiWhatsappEnabled: boolean  = JSON.parse(process.env.API_WHATSAPP_BUSSINES_ENABLED || "false");
console.log(`apiWhatsappEnabled: ${apiWhatsappEnabled}`)

const options: ClientOptions = {
    authStrategy: new LocalAuth(),
    puppeteer: {
      headless: true,
      args: ['--no-sandbox']
  }
}

export const whatsappWebClient = new Client(options);

const init = async ()=>{
    if(!apiWhatsappEnabled){
        console.log("try to initialize whatsappWebClient");
        await whatsappWebClient.initialize();
    }
}
init();
import { IMessager } from "../../domain/dtos/message.messager";
import { ClientOptions, LocalAuth, Client, MessageMedia } from "whatsapp-web.js";


const apiWhatsappEnabled: boolean  = JSON.parse(process.env.API_WHATSAPP_BUSSINES_ENABLED || "false");
console.log(`apiWhatsappEnabled: ${apiWhatsappEnabled}`)
const options: ClientOptions = {
    authStrategy: new LocalAuth()
}
export const whatsappWebClient = new Client(options);

const init = async ()=>{
    if(!apiWhatsappEnabled){
        console.log("try to initialize whatsappWebClient");
        await whatsappWebClient.initialize();
    }
}

init();

export class WhatsappWebMessager implements IMessager{
    constructor(private readonly whatsappWebClient: Client){}
    async sendMessage(phone: string, text: string): Promise<void> {
        await this.whatsappWebClient.sendMessage(`${phone}@s.whatsapp.net`, text);
    }
    async sendMessageAndImage(phone: string, text: string, image: string): Promise<void> {
        const media = new MessageMedia('image/png', image);
        await this.whatsappWebClient.sendMessage(`${phone}@s.whatsapp.net`, media);
    }

}
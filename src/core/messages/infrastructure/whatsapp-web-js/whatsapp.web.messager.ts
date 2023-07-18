import { IMessager } from "../../domain/dtos/message.messager";
import { Client, MessageMedia } from "whatsapp-web.js";

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
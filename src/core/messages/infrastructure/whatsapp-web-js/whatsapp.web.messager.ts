import { IMessager } from "../../domain/dtos/message.messager";
import { whatsappWebClient } from "./connection";

export class WhatsappWebMessager implements IMessager{
    sendMessage(phone: string, text: string): void {
        whatsappWebClient.sendMessage(phone, text);
    }
    sendMessageAndImage(phone: string, text: string, image: string): void {
        throw new Error("Method not implemented.");
    }

}
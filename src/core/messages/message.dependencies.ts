import { MessageService } from "./application/message.service";
import { MessageController } from "./infrastructure/http/message.controller";
import { MockMessager } from "./infrastructure/mock-messager/mock.messager";

import { WhatsappWebMessager } from "./infrastructure/whatsapp-web-js/whatsapp.web.messager";
import { WhatsappWebController } from "./infrastructure/whatsapp-web-js/whatsapp.controller";
import { customerService } from "../customer/dependencies";
import { whatsappWebClient } from "./infrastructure/whatsapp-web-js/connectionWclient"
import { paymentService } from "../payment/payment.dependencies";

const apiWhatsappEnabled: boolean  = JSON.parse(process.env.API_WHATSAPP_BUSSINES_ENABLED || "false");

const chooseMessager = ()=>{
    if(apiWhatsappEnabled){
        return new MockMessager();
    }else{
        return new WhatsappWebMessager(whatsappWebClient);
    }
}
const messager = chooseMessager(); 


export const messageService = new MessageService(customerService, messager, paymentService);
export const messageController = new MessageController(messageService);
export const whatsappWebController = new WhatsappWebController(messageService);

whatsappWebClient.on('qr', whatsappWebController.generateQr);
whatsappWebClient.on('ready', whatsappWebController.clientInizializated);
whatsappWebClient.on('message', whatsappWebController.receiverMessage);
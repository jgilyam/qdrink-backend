import { MessageService } from "./application/message.service";
import { MessageController } from "./infrastructure/http/message.controller";
import { MockMessager } from "./infrastructure/mock-messager/mock.messager";
import { apiWhatsappEnabled } from "./infrastructure/whatsapp-web-js/connection";
import { WhatsappWebMessager } from "./infrastructure/whatsapp-web-js/whatsapp.web.messager";
import { customerService } from "../customer/dependencies";

const chooseMessager = ()=>{
    if(apiWhatsappEnabled){
        return new MockMessager();
    }else{
        return new WhatsappWebMessager();
    }
}
const messager = chooseMessager(); 
export const messageService = new MessageService(customerService, messager)
export const messageController = new MessageController(messageService);
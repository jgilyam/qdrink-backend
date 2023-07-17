import qrcode from "qrcode-terminal";
import WAWebJS from "whatsapp-web.js";
import { MessageService } from "../../application/message.service";
import { MessageinDTO } from "../../domain/dtos/message.in.dto";

export class WhatsappWebController{
    constructor(private readonly messageService: MessageService){}
    generateQr = (qr: string) => {
        qrcode.generate(qr, {small: true});
    }
    
    clientInizializated = () => {
        console.log('Client is ready!');
    }
    
    receiverMessage = (message: WAWebJS.Message)=>{
        const {from: phone, body: text} = message
        const messageinDTO: MessageinDTO = {
            phone,
            text
        }
        this.messageService.receiver(messageinDTO);
    }
}

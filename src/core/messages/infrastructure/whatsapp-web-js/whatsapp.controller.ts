import qrcode from "qrcode-terminal";
import WAWebJS from "whatsapp-web.js";
import { MessageService } from "../../application/message.service";
import { MessageinDTO } from "../../domain/dtos/message.in.dto";

export class WhatsappWebController{
    constructor(private readonly messageService: MessageService){
    }
    generateQr = (qr: string) => {
        console.log('generateQr');
        qrcode.generate(qr, {small: true});
    }
    
    clientInizializated = () => {
        console.log('Client is ready!');
    }
    
    receiverMessage =  async (message: WAWebJS.Message)=>{
        const {from, body: text} = message
        const indexOfAt = from.indexOf("@")
        const messageinDTO: MessageinDTO = {
            phone: from.slice(0,indexOfAt),
            text
        }
        console.log(`receiverMessage: ${JSON.stringify(messageinDTO, undefined, 2)}`);
        await this.messageService.receiver(messageinDTO);
    }
}

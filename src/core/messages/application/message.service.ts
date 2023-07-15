import { MessageinDTO } from "../domain/dtos/message.in.dto";
import { NewCostumerHandlerCreator } from "./message-handler/new.customer.handler";
import { LoadCreditHandlerCreator } from "./message-handler/load.credit.handler";
import { Creator } from "./message-handler/message.handler.creator";
import { RequestQrCodeHandlerCreator } from "./message-handler/request.qrcode.handler";



const choseHandler = (text: string, phone: string) => {
  switch (text) {
    case "qr":
      return new RequestQrCodeHandlerCreator();
    case "saldo":
      return new LoadCreditHandlerCreator();
    case "new":
      return new NewCostumerHandlerCreator();
    default:
      return new LoadCreditHandlerCreator();
  }
};


export class MessageService {
    constructor() {}
  
    receiver = async (body: MessageinDTO)=>{
        const { text, phone } = body;
        
        const response = choseHandler(text, phone);
        
        const res = response.run()
    
        console.log(res);
    
      
    };
}
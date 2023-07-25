import { MessageinDTO } from "../domain/dtos/message.in.dto";
import { NewCostumerHandlerCreator } from "./message-handler/new.customer.handler";
import { LoadCreditHandlerCreator } from "./message-handler/load.credit.handler";
import { RequestQrCodeHandlerCreator } from "./message-handler/request.qrcode.handler";
import { CustomerService } from "../../customer/application/customer.service";
import { IMessager } from "../domain/dtos/message.messager";
import { PaymentService } from "../../payment/application/payment.service";
import { BalanceRequestHandlerCreator } from "./message-handler/balance.request.handler";
import { DefaultRequestHandlerCreator } from "./message-handler/default.request.handler";


export class MessageService {
    constructor(private readonly customerService: CustomerService, private readonly messager: IMessager, private readonly paymentService: PaymentService) {}
  
    receiver = async (body: MessageinDTO)=>{
        const { text, phone } = body;
    
        const response = await this.choseHandler(text, phone);
        await response.run()
    };

    private choseHandler = async (text: string, phone: string) => {
      
      const customer = await this.customerService.findByPhone(phone);

      if(!customer) 
        return new NewCostumerHandlerCreator(this.customerService, this.messager, phone);
      
      const amountToCharge = parseFloat(text);
      
      if(!Number.isNaN(amountToCharge))
        return new LoadCreditHandlerCreator(this.messager, this.paymentService, amountToCharge, customer, phone);

        switch (text) {
        case "qr":
          return new RequestQrCodeHandlerCreator(this.messager, customer, phone);
        case "saldo":
          return new BalanceRequestHandlerCreator(this.messager, customer, phone);
        default:
          return new DefaultRequestHandlerCreator(this. messager, phone);
      }
    }
}
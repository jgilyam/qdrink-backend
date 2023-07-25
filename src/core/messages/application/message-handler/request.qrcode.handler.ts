
import { Creator } from "./message.handler.creator";
import { MessageHandler } from "./message.handler";
import { IMessager } from "../../domain/dtos/message.messager";
import { CustomerOutDTO } from "../../../customer/domain";
import { signCustomer } from "../../../../common/jwt.utils";
import { generateQrCode } from "../../../../common/qrcode.utils";

export class RequestQrCodeHandlerCreator extends Creator {
    private customer: CustomerOutDTO;
    private phone: string;
    
    constructor(private readonly messager: IMessager, customer: CustomerOutDTO, phone: string){
        super();
        this.customer = customer;
        this.phone = phone;
    }
    
    public createMessageHandler(): MessageHandler {
        return new RequestQrCodeHandler(this.messager, this.customer, this.phone);
    }
}

class RequestQrCodeHandler implements MessageHandler {
    private customer: CustomerOutDTO;
    private qrImage: string;
    private phone: string;
    
    constructor(private readonly messager: IMessager, customer: CustomerOutDTO, phone: string){
        this.customer = customer;
        this.qrImage = "";
        this.phone = phone;
    }

    async execute(): Promise<void>{
        
        const token = await signCustomer({
            sub: this.customer.id,
            rol: "customer"
        });
        
        this.qrImage = await generateQrCode(token);
    }
    reply(): string {
        
        const respose = 'Hola aqui tienes tu codigo Qr para poder consumir, que lo disfrutes'
        this.messager.sendMessageAndImage(this.phone, respose, this.qrImage);
        
        return respose;
    }
}

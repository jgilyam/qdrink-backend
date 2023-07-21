
import { Creator } from "./message.handler.creator";
import { MessageHandler } from "./message.handler";

import { CustomerService } from "../../../customer/application/customer.service";
import { CustomerInDTO } from "../../../customer/domain";
import { IMessager } from "../../domain/dtos/message.messager";
import { signCustomer } from "../../../../common/jwt.utils";
import { generateQrCode } from "../../../../common/qrcode.utils";

export class NewCostumerHandlerCreator extends Creator {
    
    private phone: string
    constructor(private readonly customerService: CustomerService, private readonly messager: IMessager, phone: string){
        super();
        this.phone = phone;
    }
    public createMessageHandler(): MessageHandler {
        return new NewCostumerHandler(this.customerService,this.messager,  this.phone);
    }
}

class NewCostumerHandler implements MessageHandler {
    
    private phone: string;
    private qrImage: string
    
    constructor(private readonly customerService: CustomerService, private readonly messager: IMessager, phone: string){
        this.phone = phone;
        this.qrImage = "";
    }
    
    async execute(): Promise<void> {
        
        const customerInDTO: CustomerInDTO = {
            phone: this.phone
        };

        const customer = await this.customerService.add(customerInDTO); 
        const token = await signCustomer({
            sub: customer?.id,
            rol: "customer"
        });
        console.log(customer)

        const qrCode = await generateQrCode(token);
        const qrCodeContent = qrCode.split(",");
        //this.qrImage = "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"
        this.qrImage = qrCodeContent[1];
    }
    reply(): string {
        const response = `Hola bienvenido a Qdrink: reponde el siguiente mensajes segun estas opciones:
        1- Envianos un monto en pesos si queres cargar saldo en tu cuenta.
        2- Envianos la palabra "qr" para que te enviemos tu codigo para consumir en nuestro sistema.
        3- Envianos la palabra "saldo" si queres conocer tu saldo disponible`

        this.messager.sendMessageAndImage(this.phone,response,this.qrImage)
        return response;
    }
}

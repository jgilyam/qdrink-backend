
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

        await this.customerService.add(customerInDTO); 
    }
    reply(): string {
        const response = `Hola bienvenido a Qdrink: reponde el siguiente mensajes segun estas opciones:
        1- Envianos un monto en pesos si queres cargar saldo en tu cuenta.
        2- Envianos la palabra "qr" para que te enviemos tu codigo para consumir en nuestro sistema.
        3- Envianos la palabra "saldo" si queres conocer tu saldo disponible`

        this.messager.sendMessage(this.phone, response)
        return response;
    }
}

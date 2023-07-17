
import { Creator } from "./message.handler.creator";
import { MessageHandler } from "./message.handler";

import { CustomerService } from "../../../customer/application/customer.service";
import { CustomerInDTO } from "../../../customer/domain";
import { IMessager } from "../../domain/dtos/message.messager";

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
    
    execute(): void {
        console.log("aca se ejecuta la logica de negocio cuando el cliente es nuevo")
        const customerInDTO: CustomerInDTO = {
            phone: this.phone
        };

        this.customerService.add(customerInDTO); 
        this.qrImage = "Estoy deberia ser una imagen codificada en base64"
    }
    reply(): string {
        const response = "Hola bienvenido a Qdrink, para cargar saldo, envianos el monto en pesos de la catidad de dinero que queres acreditar en tu cuenta, con ello generaremos una solicitud de pago para que puedas pagar";
        
        this.messager.sendMessageAndImage(this.phone, response, this.qrImage);
        return response;
    }
}


import { Creator } from "./message.handler.creator";
import { MessageHandler } from "./message.handler";

import { CustomerService } from "../../../customer/application/customer.service";
import { CustomerInDTO } from "../../../customer/domain";

export class NewCostumerHandlerCreator extends Creator {
    
    private phone: string
    constructor(private readonly customerService: CustomerService, phone: string){
        super();
        this.phone = phone;
    }
    public createMessageHandler(): MessageHandler {
        return new NewCostumerHandler(this.customerService, this.phone);
    }
}

class NewCostumerHandler implements MessageHandler {
    
    private phone: string
    
    constructor(private readonly customerService: CustomerService, phone: string){
        this.phone = phone;
    }
    
    execute(): void {
        console.log("aca se ejecuta la logica de negocio cuando el cliente es nuevo")
        const customerInDTO: CustomerInDTO = {
            phone: this.phone
        };
        
        this.customerService.add(customerInDTO); 
    }
    reply(): string {
        return "Hola bienvenido a Qdrink, para cargar saldo, envianos el monto en pesos de la catidad de dinero que queres acreditar en tu cuenta, con ello generaremos una solicitud de pago para que puedas pagar";
    }
}

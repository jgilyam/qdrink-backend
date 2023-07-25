import { IMessager } from "../../domain/dtos/message.messager";
import { MessageHandler } from "./message.handler";
import { Creator } from "./message.handler.creator";

export class DefaultRequestHandlerCreator extends Creator {
    
    private phone: string;

    constructor(private readonly messager: IMessager, phone: string){
        super();
        this.phone = phone;    
    }

    public createMessageHandler(): MessageHandler {
        return new DefaultRequestHandler(this.messager, this.phone);
    }
}

class DefaultRequestHandler implements MessageHandler {
    
    private phone: string;

    constructor(private readonly messager: IMessager, phone: string){       
        this.phone = phone;
    }

    async execute(): Promise<void> {}
    
    reply(): string {
        const response = `Hola! el texto que nos enviaste no esta dentro de nuestras opciones, te recordamos las solicitudes que podemos procesar:
        1- Envianos un monto en pesos si queres cargar saldo en tu cuenta.
        2- Envianos la palabra "qr" para que te enviemos tu codigo para consumir en nuestro sistema.
        3- Envianos la palabra "saldo" si queres conocer tu saldo disponible`

        this.messager.sendMessage(this.phone, response);
        return response;       
    }
}
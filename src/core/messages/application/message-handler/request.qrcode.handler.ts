
import { Creator } from "./message.handler.creator";
import { MessageHandler } from "./message.handler";

export class RequestQrCodeHandlerCreator extends Creator {
    public createMessageHandler(): MessageHandler {
        return new RequestQrCodeHandler();
    }
}

class RequestQrCodeHandler implements MessageHandler {
    async execute(): Promise<void>{
        console.log("aca se ejecuta la logica de negocio cuando el cliente solicita su QR")
    }
    reply(): string {
        return 'Hola aqui tienes tu codigo Qr para poder consumir, que lo disfrutes';
    }
}

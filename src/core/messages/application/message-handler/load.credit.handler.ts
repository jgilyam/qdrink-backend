
import { Creator } from "./message.handler.creator";
import { MessageHandler } from "./message.handler";

export class LoadCreditHandlerCreator extends Creator {
    public createMessageHandler(): MessageHandler {
        return new LoadCreditHandler();
    }
}

class LoadCreditHandler implements MessageHandler {
    async execute(): Promise<void> {
        console.log("aca se ejecuta la logica de negocio cuando el cliente quiere cargar credito en su cuenta")
    }
    reply(): string {
        return "Te dejamos el siguiente link para que puedas cargar en tu cuenta los 500 pesos que solicitaste ";
    }
}
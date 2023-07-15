
import { Creator } from "./message.handler.creator";
import { MessageHandler } from "./message.handler";

export class NewCostumerHandlerCreator extends Creator {
    public createMessageHandler(): MessageHandler {
        return new NewCostumerHandler();
    }
}

class NewCostumerHandler implements MessageHandler {
    execute(): void {
        console.log("aca se ejecuta la logica de negocio cuando el cliente es nuevo")
    }
    reply(): string {
        return "Hola bienvenido a Qdrink, para cargar saldo, envianos el monto en pesos de la catidad de dinero que queres acreditar en tu cuenta, con ello generaremos una solicitud de pago para que puedas pagar";
    }
}

import { MessageHandler } from "./message.handler";

export abstract class Creator {

    public abstract createMessageHandler(): MessageHandler;

    public run(): string {
    
        const product = this.createMessageHandler();
        product.execute();

        return product.reply();
    }
}
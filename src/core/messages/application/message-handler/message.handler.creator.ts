import { MessageHandler } from "./message.handler";

export abstract class Creator {

    public abstract createMessageHandler(): MessageHandler;

    public async run(): Promise<string> {
    
        const product = this.createMessageHandler();
        await product.execute();

        return product.reply();
    }
}
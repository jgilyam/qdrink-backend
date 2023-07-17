import { IMessager } from "../../domain/dtos/message.messager";

export class MockMessager implements IMessager{
    sendMessage(phone: string, text: string): void {
        console.log("Executing sendMessage of mock messager");
        console.log(JSON.stringify({phone, text}, undefined, 2));
    }
    sendMessageAndImage(phone: string, text: string, image: string): void {
        console.log("Executing sendMessageAndImage of mock messager");
        console.log(JSON.stringify({phone, text, image}, undefined, 2));
    }
}
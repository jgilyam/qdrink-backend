import { IMessager } from "../../domain/dtos/message.messager";

export class MockMessager implements IMessager{
    sendMessage = async (phone: string, text: string): Promise<void> =>{
        console.log("Executing sendMessage of mock messager");
        console.log(JSON.stringify({phone, text}, undefined, 2));
    }
    sendMessageAndImage = async (phone: string, text: string, image: string): Promise<void> => {
        console.log("Executing sendMessageAndImage of mock messager");
        console.log(`Esto es un qr: ${image.slice(20)}`)
        console.log(JSON.stringify({phone, text}, undefined, 2));
    }
}
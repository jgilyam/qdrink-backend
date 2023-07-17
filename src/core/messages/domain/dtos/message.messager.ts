export interface IMessager {
    sendMessage(phone: string, text: string) : void;
    sendMessageAndImage(phone: string, text: string, image: string): void;
}
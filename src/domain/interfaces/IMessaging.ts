export interface IMessaging {
  sendMessage(to: string, message: string, image?: string): Promise<boolean>;
}

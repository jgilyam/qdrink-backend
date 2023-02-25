import { IMessaging } from "../../../domain/interfaces/IMessaging";
import apiWhatsappClient from "./api.whatsapp";
import { MessageMapper } from "./domain/mappers/MessageMapper";

export class MessagerClient implements IMessaging {
  constructor(private readonly messageMapper: MessageMapper) {}
  async sendMessage(
    to: string,
    message: string,
    image?: string | undefined
  ): Promise<any> {
    const createMessageDTO = this.messageMapper.domainToDto(to, message, image);
    await apiWhatsappClient.post("/messages", createMessageDTO);
    return true;
  }
}

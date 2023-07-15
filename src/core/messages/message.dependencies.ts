import { MessageService } from "./application/message.service";
import { MessageController } from "./infrastructure/http/message.controller";


export const messageService = new MessageService()
export const messageController = new MessageController(messageService);
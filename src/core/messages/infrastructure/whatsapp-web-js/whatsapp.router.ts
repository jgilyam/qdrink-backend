import qrcode from "qrcode-terminal";

import { whatsappWebClient } from "./connection";
import { WhatsappWebController} from "./whatsapp.controller";


import { messageService } from "../../message.dependencies";

const whatsappWebController = new WhatsappWebController(messageService);

whatsappWebClient.on('qr', whatsappWebController.generateQr);
whatsappWebClient.on('ready', whatsappWebController.clientInizializated);
whatsappWebClient.on('message', whatsappWebController.receiverMessage);
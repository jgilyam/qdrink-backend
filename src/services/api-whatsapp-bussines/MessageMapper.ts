import { CreateMessageDTO } from "./dtos/CreateMessageDTO";

export class MessageMapper {
  domainToDto(
    to: string,
    message: string,
    image?: string | undefined
  ): CreateMessageDTO {
    const createMessageDTO: CreateMessageDTO = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: to,
      type: "template",
      template: {
        name: "sending_qr",
        language: {
          code: "es_AR",
        },
        components: [
          {
            type: "header",
            parameters: [
              {
                type: "image",
                image: {
                  link: "https://www.freepnglogos.com/uploads/qr-code-png/qr-code-file-bangla-mobile-code-0.png",
                },
              },
            ],
          },
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: message,
              },
            ],
          },
        ],
      },
    };
    return createMessageDTO;
  }
}

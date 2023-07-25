
import { Creator } from "./message.handler.creator";
import { MessageHandler } from "./message.handler";
import { CustomerOutDTO } from "../../../customer/domain";
import { IMessager } from "../../domain/dtos/message.messager";
import { PaymentService } from "../../../payment/application/payment.service";

export class LoadCreditHandlerCreator extends Creator {
    private amountToCharge: number; 
    private customer: CustomerOutDTO;
    private phone: string;

    constructor(private readonly messager: IMessager, private readonly paymentService: PaymentService, amountToCharge: number, customer: CustomerOutDTO, phone: string){
        super();
        this.amountToCharge = amountToCharge;
        this.customer = customer;
        this.phone = phone;
        
    }

    public createMessageHandler(): MessageHandler {
        return new LoadCreditHandler(this.messager, this.paymentService, this.amountToCharge, this.customer, this.phone);
    }
}

class LoadCreditHandler implements MessageHandler {
    private amountToCharge: number; 
    private customer: CustomerOutDTO;
    private phone: string;
    private urlToPay: string;

    constructor(private readonly messager: IMessager, private readonly paymentService: PaymentService, amountToCharge: number, customer: CustomerOutDTO, phone: string){
        this.amountToCharge = amountToCharge;
        this.customer = customer;
        this.phone = phone;
        this.urlToPay = "";
        
    }

    async execute(): Promise<void> {
        this.urlToPay = await this.paymentService.addNewPayment(this.amountToCharge, this.customer, this.phone)
    }
    reply(): string {
        const response = `Te dejamos el siguiente link ${this.urlToPay} para que puedas cargar en tu cuenta los ${this.amountToCharge} pesos que solicitaste`
        this.messager.sendMessage(this.phone, response)
        return response;
    }
}
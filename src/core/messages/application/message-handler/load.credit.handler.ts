
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
    private response: string;

    constructor(private readonly messager: IMessager, private readonly paymentService: PaymentService, amountToCharge: number, customer: CustomerOutDTO, phone: string){
        this.amountToCharge = amountToCharge;
        this.customer = customer;
        this.phone = phone;
        this.response = "";
        
    }

    async execute(): Promise<void> {
        console.log('execute')
        this.response = await this.paymentService.addNewPayment(this.amountToCharge, this.customer, this.phone)
        console.log(JSON.stringify(this.response, undefined, 2))
    }
    reply(): string {
        this.messager.sendMessage(this.phone, this.response)
        return `Te dejamos el siguiente link para que puedas cargar en tu cuenta los 500 pesos que solicitaste ${this.response} `;
    }
}
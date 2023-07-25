import { CustomerOutDTO } from "../../../customer/domain";
import { IMessager } from "../../domain/dtos/message.messager";
import { MessageHandler } from "./message.handler";
import { Creator } from "./message.handler.creator";

export class BalanceRequestHandlerCreator extends Creator {
    
    private customer: CustomerOutDTO;
    private phone: string;

    constructor(private readonly messager: IMessager, customer: CustomerOutDTO, phone: string){
        super();
        this.customer = customer;
        this.phone = phone;    
    }

    public createMessageHandler(): MessageHandler {
        return new BalanceRequestHandler(this.messager, this.customer, this.phone);
    }
}

class BalanceRequestHandler implements MessageHandler {
    
    private phone: string;
    private balance: number | undefined;

    constructor(private readonly messager: IMessager, customer: CustomerOutDTO, phone: string){       
        this.phone = phone;
        this.balance = customer.balance;
    }

    async execute(): Promise<void> {}
    
    reply(): string {
        const response = `El saldo registrado para el cliente ${this.phone} es de: ${this.balance}`
        this.messager.sendMessage(this.phone, response);
        return response;       
    }
}
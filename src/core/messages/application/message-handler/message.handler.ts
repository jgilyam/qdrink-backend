export interface MessageHandler {
    execute(): Promise<void>;
    reply(): string;
}
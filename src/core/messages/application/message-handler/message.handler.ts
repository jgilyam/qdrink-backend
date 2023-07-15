export interface MessageHandler {
    execute(): void;
    reply(): string;
}
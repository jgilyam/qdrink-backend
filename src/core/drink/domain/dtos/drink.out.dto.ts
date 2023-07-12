export interface DrinkOutDTO{
    id: string | undefined;
    name: string;
    description: string;
    priceLiter: number;
    image?: string;
    ibu?: string;
    alcoholContent: string;
}
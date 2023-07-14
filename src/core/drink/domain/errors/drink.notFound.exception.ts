export class DrinkNotFoundException extends Error {
  message: string;
  constructor() {
    super();
    this.message = "Drink Not Found"
  }
}

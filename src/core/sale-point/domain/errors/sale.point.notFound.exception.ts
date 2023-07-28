export class SalePointNotFoundException extends Error {
  message: string;
  constructor() {
    super();
    this.message = "Sale Point not found"
  }
}

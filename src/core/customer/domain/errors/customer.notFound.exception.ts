export class CustomerNotFoundException extends Error {
  message: string;
  constructor() {
    super();
    this.message = "Customer not found"
  }
}

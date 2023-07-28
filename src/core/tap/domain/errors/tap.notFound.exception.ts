export class TapNotFoundExcpetion extends Error {
    message: string;
    constructor() {
      super();
      this.message = "Tap not found"
    }
  }
  
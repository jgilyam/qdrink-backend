export class MoreThanTwoDrinksExcpetion extends Error {
    message: string;
    constructor() {
      super();
      this.message = "Up to two drinks are allowed per tap"
    }
  }
  
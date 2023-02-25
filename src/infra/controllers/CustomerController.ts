import { Request, Response } from "express";
import { CurstomerService } from "../../aplication/CustomerService";

export class CustomerController {
  constructor(private readonly customerService: CurstomerService) {}

  public findAllCustomers = async (req: Request, res: Response) => {
    console.log("estoy en el controller de cutomers");
    const customers = await this.customerService.findAllCustomers();
    res.send({ customers });
  };
}

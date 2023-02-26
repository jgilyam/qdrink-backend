import { Request, Response } from "express";
import { CurstomerService } from "../../aplication/CustomerService";
import { CustomerDTO } from "../../domain/dtos/CustomerDTO";

export class CustomerController {
  constructor(private readonly customerService: CurstomerService) {}

  public findAllCustomers = async (req: Request, res: Response) => {
    const customers = await this.customerService.findAllCustomers();
    res.send({ customers }).status(200);
  };

  public sendMessage = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.customerService.sendQr(parseInt(id));
    res.send("mensaje enviado");
  };

  public addCustomer = async (req: Request, res: Response) => {
    const customerDTO: CustomerDTO = req.body;
    const customerEntity = await this.customerService.addCustomer(customerDTO);
    res.send({ customerEntity });
  };
}

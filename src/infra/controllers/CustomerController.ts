import { Request, Response } from "express";
import { CurstomerService } from "../../aplication/CustomerService";
import { CustomerDTO } from "../../domain/dtos/CustomerDTO";

export class CustomerController {
  constructor(private readonly customerService: CurstomerService) {}

  public findAllCustomers = async (req: Request, res: Response) => {
    const customers = await this.customerService.findAllCustomers();
    res.send(customers).status(200);
  };

  public sendMessage = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await this.customerService.sendQr(id);
    res.send("mensaje enviado");
  };

  public addCustomer = async (req: Request, res: Response) => {
    const customerDTO: CustomerDTO = req.body;
    const customerEntity = await this.customerService.addCustomer(customerDTO);
    res.send(customerEntity);
  };

  public findCustomerById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const customer = await this.customerService.findCustomerById(parseInt(id));
    res.send(customer);
  };

  public deleteCustomerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const customer = await this.customerService.deleteCustomerById(id);
    res.send(customer);
  };
}

import { NextFunction, Request, Response } from 'express';
import { CustomerService } from "../../application/customer.service";
import { CustomerOutDTO } from '../../domain';
import { UserRequest } from '../../../auth/infrastructure/authentication.middelware';
import { HttpCode } from '../../../../common/http.codes';

export class CustomerController{
    constructor(private readonly customerService: CustomerService ){}

    findById = async(req: UserRequest, res: Response<CustomerOutDTO | null,{}>, next: NextFunction)=>{
        const  { user }  = req;

        if(!user || !user.sub) throw new Error("Unknow who send the request")
        const {sub, rol} = user;
        if (rol!=="customer") throw new Error("Wrong rol request")
        try {
            const tap = await this.customerService.findById(sub);
            res.status(HttpCode.OK).json(tap);
        } catch (error) {
            next(error);
        }
    }
}
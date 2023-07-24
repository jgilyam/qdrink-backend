import { NextFunction, Request, Response } from "express";
import { HttpCode } from "../../../../common/http.codes";

export class PaymentController{
    constructor(){

    }

    add = async(req: Request<{userId: string},{},{},{}>, res: Response<{},{}>, next: NextFunction)=>{
        const { body, query, params }= req
        const {userId} = params;
        try {
            console.log(`Ejecuccion de webhook:
            --------------------------------
            Llego un info de pago del usuario ${userId}
            --------------------------------`);
            console.log(JSON.stringify(body, undefined, 2));
            console.log("********query*************");
            console.log(JSON.stringify(query, undefined, 2));
            res.status(HttpCode.OK).json({});
            
        } catch (error) {
            next(error);
        }
    }
}
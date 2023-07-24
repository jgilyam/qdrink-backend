import { NextFunction, Request, Response } from "express";
import { HttpCode } from "../../../../common/http.codes";
import { MerchantOrderDTO } from "../mercadopago/domain/dtos/merchant.order.dto";
import { PaymentCreatedDTO } from "../mercadopago/domain/dtos/payment.created.dto";

export class PaymentController{
    constructor(){

    }

    updatePaymentStatus = async(req: Request<{paymentId: string},{},PaymentCreatedDTO,{}>, res: Response<{},{}>, next: NextFunction)=>{
        const { body, query, params }= req
        const {paymentId} = params;
      
        try {
            console.log(`Ejecuccion de webhook:
            --------------------------------
            Llego un info de pago  ${paymentId}
            --------------------------------`);
            console.log(JSON.stringify(body, undefined, 2));
            console.log("********query*************");
            console.log(JSON.stringify(query, undefined, 2));
            res.sendStatus(HttpCode.OK);
            if(body.type ==='payment'){
                console.log("Updating payment");
                pay
            }

            
            
        } catch (error) {
            next(error);
        }
    }
}
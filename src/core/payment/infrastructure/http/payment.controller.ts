import { NextFunction, Request, Response } from "express";
import { HttpCode } from "../../../../common/http.codes";
import { MerchantOrderDTO } from "../mercadopago/domain/dtos/merchant.order.dto";
import { PaymentCreatedDTO } from "../mercadopago/domain/dtos/payment.created.dto";
import { PaymentService } from "../../application";

export class PaymentController{
    constructor(private readonly paymentService: PaymentService){

    }

    updatePaymentStatus = async(req: Request<{paymentId: string},{},PaymentCreatedDTO,{}>, res: Response<{},{}>, next: NextFunction)=>{
        const { body, query, params }= req
        const { paymentId } = params;
      
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
                const{ id: externalPaymentId } = body.data
                await this.paymentService.updatePaymentStatus(paymentId, externalPaymentId);
            }

            
            
        } catch (error) {
            next(error);
        }
    }
}
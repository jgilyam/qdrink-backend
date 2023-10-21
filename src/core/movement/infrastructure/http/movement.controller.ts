import {Request, Response, NextFunction} from "express"
import { MovementService } from "../../application/movement.service";
import { HttpCode } from "../../../../common/http.codes";
import { UserRequest } from "../../../auth/infrastructure/authentication.middelware";
import { ConsuptionDTO } from "../../domain/dtos/consumption.dto";
import { ConsuptionOutDTO } from "../../domain/dtos/consumption.out.dto";


export class MovementController {
    constructor(private readonly movementService: MovementService){}

    chargeConsumption = async(req: UserRequest, res: Response<ConsuptionOutDTO | null,{}>, next: NextFunction)=>{
        const  { user }  = req;
        const body = req.body as ConsuptionDTO
        if(!user || !(user.sub)) throw new Error("Unknow who send the request")
        const {sub, rol} = user;
        if (rol!=="customer") throw new Error("Wrong rol request")
        try {
            const result = await this.movementService.chargeConsumption(sub,body);
            res.status(HttpCode.OK).json(result);
        } catch (error) {
            next(error);
        }
    }
}
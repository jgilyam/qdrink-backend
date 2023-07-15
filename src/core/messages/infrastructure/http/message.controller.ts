import { NextFunction, Request, Response } from 'express';
import { MessageService } from '../../application/message.service';
import { HttpCode } from '../../../../common/http.codes';
import { MessageinDTO } from '../../domain/dtos/message.in.dto';

export class MessageController{
    constructor(private readonly messagerService: MessageService){}
    receiver = async(req: Request<{},{},MessageinDTO,{}>, res: Response<{},{}>, next: NextFunction)=>{
        const { body }= req
        try {
            
            res.sendStatus(HttpCode.OK);
            await this.messagerService.receiver(body);
            
        } catch (error) {
            next(error);
        }
    }
}
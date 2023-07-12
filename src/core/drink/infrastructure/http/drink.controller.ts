import { NextFunction, Request, Response } from 'express';

import { DrinkService } from "../../application/drink.service";
import { DrinkAddDTO } from '../../domain/dtos/drink.add.dto';
import { DrinkOutDTO } from '../../domain/dtos/drink.out.dto';

export class DrinkController{
    constructor(private readonly drinkService: DrinkService){}
    add = async(req: Request<{},{},DrinkAddDTO,{}>, res: Response<DrinkOutDTO,{}>, next: NextFunction)=>{
        const { body }= req
        try {
            const drink = await this.drinkService.add(body);
            res.status(200).json(drink);
            
        } catch (error) {
            next(error);
        }
    }
}
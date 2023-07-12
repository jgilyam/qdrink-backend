import { NextFunction, Request, Response } from 'express';

import { DrinkService } from "../../application/drink.service";
import { DrinkAddDTO } from '../../domain/dtos/drink.add.dto';
import { DrinkOutDTO } from '../../domain/dtos/drink.out.dto';
import { Page } from '../../../../common/page.response';

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

    findAll = async(req: Request<{},{},{},{}>, res: Response<Page<DrinkOutDTO>,{}>, next: NextFunction)=>{
        try {
            
            const drinks = await this.drinkService.findAllDrinks();
            res.status(200).json(drinks);
            
        } catch (error) {
            next(error);
        }
    }

    edit = async(req: Request<{drinkId: string},{},DrinkAddDTO,{}>, res: Response<DrinkOutDTO,{}>, next: NextFunction)=>{
        const { drinkId }= req.params
        const { body }= req
        try {

            const drink = await this.drinkService.edit(drinkId, body);
            res.status(200).json(drink);
            
        } catch (error) {
            next(error);
        }
    }
}
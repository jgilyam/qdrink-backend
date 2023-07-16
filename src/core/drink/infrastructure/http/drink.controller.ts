import { NextFunction, Request, Response } from 'express';

import { DrinkService } from "../../application/drink.service";
import { DrinkInDTO, DrinkOutDTO } from '../../domain';
import { Page } from '../../../../common/page.response';
import { HttpCode } from '../../../../common/http.codes';

export class DrinkController{
    constructor(private readonly drinkService: DrinkService){}
    add = async(req: Request<{},{},DrinkInDTO,{}>, res: Response<DrinkOutDTO | null,{}>, next: NextFunction)=>{
        const { body }= req
        try {
            const drink = await this.drinkService.add(body);
            res.status(HttpCode.CREATED).json(drink);
            
        } catch (error) {
            next(error);
        }
    }

    findAll = async(req: Request<{},{},{},{}>, res: Response<Page<DrinkOutDTO | null>,{}>, next: NextFunction)=>{
        try {
            
            const drinks = await this.drinkService.findAllDrinks();
            res.status(HttpCode.OK).json(drinks);
            
        } catch (error) {
            next(error);
        }
    }

    edit = async(req: Request<{drinkId: string},{},DrinkInDTO,{}>, res: Response<DrinkOutDTO | null,{}>, next: NextFunction)=>{
        const { drinkId }= req.params
        const { body }= req
        try {

            const drink = await this.drinkService.edit(drinkId, body);
            res.status(HttpCode.OK).json(drink);
            
        } catch (error) {
            next(error);
        }
    }

    delete = async(req: Request<{drinkId: string},{},{},{}>, res: Response<DrinkOutDTO | null,{}>, next: NextFunction)=>{
        const { drinkId }= req.params
        
        try {

            const drink = await this.drinkService.delete(drinkId);
            res.status(HttpCode.OK).json(drink);
            
        } catch (error) {
            next(error);
        }
    }
}
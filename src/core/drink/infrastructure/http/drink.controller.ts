import { NextFunction, Request, Response } from 'express';

import { DrinkService } from "../../application/drink.service";
import { DrinkInDTO, DrinkOutDTO } from '../../domain';
import { Page } from '../../../../common/page.response';
import { HttpCode } from '../../../../common/http.codes';

export class DrinkController{
    constructor(private readonly drinkService: DrinkService){}
    add = async(req: Request<{ salePointId: string },{},DrinkInDTO, {}>, res: Response<DrinkOutDTO | null,{}>, next: NextFunction)=>{
        const { body, params }= req
        const { salePointId } = params

        try {
            const drink = await this.drinkService.add(salePointId, body);
            res.status(HttpCode.CREATED).json(drink);
            
        } catch (error) {
            next(error);
        }
    }

    findAll = async(req: Request<{ salePointId: string },{},{},{}>, res: Response<Page<DrinkOutDTO | null>,{}>, next: NextFunction)=>{
        const { salePointId } = req.params
        try {
            const drinks = await this.drinkService.findAllDrinks(salePointId);
            res.status(HttpCode.OK).json(drinks);
        } catch (error) {
            next(error);
        }
    }

    edit = async(req: Request<{salePointId: string, drinkId: string},{},DrinkInDTO,{}>, res: Response<DrinkOutDTO | null,{}>, next: NextFunction)=>{
        const { body, params }= req
        const { drinkId, salePointId }= params
        try {
            const drink = await this.drinkService.edit(drinkId, body);
            res.status(HttpCode.OK).json(drink);
        } catch (error) {
            next(error);
        }
    }

    delete = async(req: Request<{salePointId: string, drinkId: string},{},{},{}>, res: Response<DrinkOutDTO | null,{}>, next: NextFunction)=>{
        const { salePointId, drinkId }= req.params
        try {
            const drink = await this.drinkService.delete(drinkId);
            res.status(HttpCode.OK).json(drink);
        } catch (error) {
            next(error);
        }
    }
}
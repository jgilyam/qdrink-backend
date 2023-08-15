import { NextFunction, Request, Response } from 'express';
import { TapLoginDTO } from '../../domain/dtos/tap.login.dto';
import { TapLoginOutDTO } from '../../domain/dtos/tap.login.out.dto';
import { HttpCode } from '../../../../common/http.codes';
import { AuthService } from '../../application/auth.service';

export class AuthController{
    constructor(private readonly authService: AuthService){}
    tapLogin = async(req: Request<{},{},TapLoginDTO, {}>, res: Response<TapLoginOutDTO | null,{}>, next: NextFunction)=>{
        const { body }= req

        try {
            const response = await this.authService.tapLogin( body );
            res.status(HttpCode.OK).json(response);
            
        } catch (error) {
            next(error);
        }
    }
}
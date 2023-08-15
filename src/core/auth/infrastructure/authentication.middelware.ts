import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../application/auth.service';
import { HttpCode } from '../../../common/http.codes';

export interface LanguageRequest extends Request {
    tapId?: string
}

export class AuthenticationMiddelware{
    constructor(private readonly authService: AuthService){}
    authenticate = async(req: LanguageRequest, res: Response, next: NextFunction)=>{
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(HttpCode.UNAUTHORIZED).json({message: 'Authorization header missing'})
        }

        const token = authorization.split(' ')[1];

        const tap = await this.authService.authenticate(token);
        req.tapId = tap;
        return next();
    }
  }
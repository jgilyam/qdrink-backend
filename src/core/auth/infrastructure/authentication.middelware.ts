import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../application/auth.service';
import { HttpCode } from '../../../common/http.codes';
import { Payload } from '../../../common/jwt.utils';

export interface UserRequest extends Request {
    user?: Payload,
    customerId?: string;
}

export class AuthenticationMiddelware{
    constructor(private readonly authService: AuthService){}
    authenticate = async(req: UserRequest, res: Response, next: NextFunction)=>{
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(HttpCode.UNAUTHORIZED).json({message: 'Authorization header missing'})
        }

        const token = authorization.split(' ')[1];

        try {
            const tap = await this.authService.authenticate(token);
            req.user = tap;
        } catch (error) {
            return next(error)
        }
        return next();
    }
  }
import jwt from "jsonwebtoken"
import { config } from "../config/config";

interface CustomerPayload{
    sub: string | undefined;
    rol: string;
}

export const signCustomer = async (payload: CustomerPayload)=>{
    const {secretJwt} = config

    const token = jwt.sign({ data: payload }, secretJwt , { expiresIn: '8h' });
    return token;
}

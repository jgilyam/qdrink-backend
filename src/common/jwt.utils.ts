import jwt from "jsonwebtoken"
import { config } from "../config/config";

export interface Payload{
    sub: string | undefined;
    rol: string;
}


export const signCustomer = async (payload: Payload)=>{
    const {secretJwt} = config
    // TODO: sacar el data
    const token = jwt.sign({ data: payload }, secretJwt , { expiresIn: '8h' });
    return token;
}

export const signTap = async (payload: Payload)=>{
    const {secretJwt} = config

    const token = jwt.sign( payload , secretJwt , { expiresIn: '24h' });
    return token;
}

export const verify = async (token: string): Promise<Payload>  =>{
    const {secretJwt} = config;
    const decode = jwt.verify(token, secretJwt);
    return decode as Payload;
}
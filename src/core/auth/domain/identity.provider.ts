import { Payload } from "../../../common/jwt.utils";

export interface IIdentityProvider{
    authenticate(token: string): Promise<Payload>;
    loginTap(tapNumber: number, password: string): Promise<string>;
}
import { Payload } from "../../../common/jwt.utils";
import { TapLoginDTO } from "../domain/dtos/tap.login.dto";
import { IIdentityProvider } from "../domain/identity.provider";


export class AuthService{
    constructor(private readonly identityProvider: IIdentityProvider){}

    tapLogin = async(tapLoginDTO: TapLoginDTO)=>{
        const {id, password} = tapLoginDTO;
        const token = await this.identityProvider.loginTap(id, password)
        return { token };
    }

    authenticate = async(token: string): Promise<Payload>=>{
        return this.identityProvider.authenticate(token);
    }
}
import { Payload, signCustomer, signTap, verify } from "../../../../common/jwt.utils";
import { TapService } from "../../../tap/application/tap.service";
import { IIdentityProvider } from "../../domain/identity.provider";

export class CustomIdentityProvider implements IIdentityProvider{
    
    constructor(private readonly tapSerice: TapService){}
    
    authenticate = async (token: string): Promise<Payload> => {
        return verify(token);
    }
    loginTap = async(tapNumber: number, password: string): Promise<string> => {

        const tapEntity = await this.tapSerice.findByUnitNumber(tapNumber);
        
        if(!tapEntity) throw new Error("User not found");

        // TODO: la contraseña deberia estar hasheada
        const { passwordForTaps } = tapEntity.salePoint;

        if(password!==passwordForTaps) throw new Error("User or password not valid");
        
        const { id } = tapEntity;
        const token = await signTap({
            sub: id,
            rol: "tap"
        });
        return token;
    }
    
}
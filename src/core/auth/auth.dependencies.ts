import { TapService } from "../tap/application/tap.service";
import { tapService } from "../tap/tap.dependencies";
import { AuthService } from "./application/auth.service";
import { AuthenticationMiddelware } from "./infrastructure/authentication.middelware";
import { CustomIdentityProvider } from "./infrastructure/custom-identity-provider/custom.identity.provider";
import { AuthController } from "./infrastructure/http/auth.controller";

const identityProvider = new CustomIdentityProvider(tapService);
export const authService = new AuthService(identityProvider);
export const authenticationMiddelware = new AuthenticationMiddelware(authService)
export const authController = new AuthController(authService);
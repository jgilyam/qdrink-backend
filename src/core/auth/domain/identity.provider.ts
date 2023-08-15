export interface IIdentityProvider{
    authenticate(token: string): Promise<string>;
    loginTap(tapNumber: number, password: string): Promise<string>;
}
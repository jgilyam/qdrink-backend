import { CustomerEntity } from "../entities";
import { IBaseRepository } from "./IBaseRepository";

export interface ICustomerRepository extends IBaseRepository<CustomerEntity> {
  findCusomerByEmail(email: string): Promise<CustomerEntity | null>;
}

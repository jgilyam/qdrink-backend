import { CustomerEntity } from "../entities/CustomerEntity";
import { CustomerDTO } from "../dtos/CustomerDTO";

export class CustomerValue implements CustomerEntity {
  id: number | null;
  email: string;
  name: string;
  phone: string;

  constructor({
    email,
    name,
    phone,
  }: {
    email: string;
    name: string;
    phone: string;
  }) {
    this.id = null;
    this.email = email;
    this.name = name;
    this.phone = phone;
  }
}

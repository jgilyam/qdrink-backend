import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CustomerEntity2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  constructor(id: number, email: string, name: string, phone: string) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.phone = phone;
  }
}

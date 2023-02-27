import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "customers",
  synchronize: false,
})
export class CustomerEntity2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  name!: string;

  @Column()
  phone!: string;
}

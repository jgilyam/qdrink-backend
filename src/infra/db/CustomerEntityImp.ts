import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CustomerEntity } from "../../domain/entities/CustomerEntity";

@Entity({
  name: "customers",
  synchronize: false,
})
export class CustomerEntityImp implements CustomerEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  name!: string;

  @Column()
  phone!: string;
}

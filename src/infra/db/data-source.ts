import { DataSource } from "typeorm";
import { CustomerEntity2 } from "../../domain/entities";

export const db = new DataSource({
  type: "postgres",
  host: process.env.DATASOURCE_HOST,
  port: 5432,
  username: process.env.DATASOURCE_USERNAME,
  password: process.env.DATASOURCE_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [CustomerEntity2],
  subscribers: [],
  migrations: [],
});

import { DataSource } from "typeorm";
import { CustomerEntityImp } from "../../domain/entities";
import dotenv from "dotenv";

dotenv.config();
export const db = new DataSource({
  type: "postgres",
  host: process.env.DATASOURCE_HOST,
  port: 5432,
  username: process.env.DATASOURCE_USERNAME,
  password: process.env.DATASOURCE_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [CustomerEntityImp],
  subscribers: [],
  migrations: [],
});

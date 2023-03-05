import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { Options } from "sequelize/types/sequelize";

dotenv.config();
const options: Options = {
  host: process.env.DATASOURCE_HOST || "127.0.0.1",
  dialect: "postgres",
  logging: false,
};

const db = new Sequelize(
  process.env.DB_NAME || "qdrink",
  process.env.DATASOURCE_USERNAME || "postgres",
  process.env.DATASOURCE_PASSWORD || "",
  options
);
export { Sequelize, db };

import dotenv from "dotenv";
import Server from "./src/infra/models/server";
import "reflect-metadata";

dotenv.config();

const server = new Server();

server.listen();

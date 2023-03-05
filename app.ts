import dotenv from "dotenv";
import Server from "./src/infra/models/server";

dotenv.config();

const server = new Server();

server.listen();

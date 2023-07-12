import express, { Application } from "express";
import cors from "cors";

import { apiPaths } from "./api.routes";
import  drinkRouter from "../core/drink/infrastructure/http/drink.router"


class Server {
  private app: Application;
  private port: string;
  private apiPaths = apiPaths;

  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT || "8000";

    this.dbConnection();
    this.middlewares();
    this.routes();
  }
  async dbConnection() {

  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.drinks, drinkRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("🚀 Server is running in port: " + this.port);
    });
  }
}

export default Server;

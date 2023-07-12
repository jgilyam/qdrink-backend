import express, { Application } from "express";
import cors from "cors";

import { apiPaths } from "./api.routes";
import  drinkRouter from "../core/drink/infrastructure/http/drink.router"
import { db } from "../db/connection";
import errorMiddleware from "../middlewares/error.middleware";


class Server {
  private app: Application;
  private port: string;
  private apiPaths;

  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT || "8000";
    this.apiPaths =apiPaths;

    this.dbConnection();
    this.middlewares();
    this.routes();
    this.app.use(errorMiddleware);
  }
  async dbConnection() {
    db.connect()
      .then(() => {
        console.log("Connection with db has been established successfully.");
      })
      .catch((error) => {
        console.error("Unable to connect to the database:", error);
      });
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

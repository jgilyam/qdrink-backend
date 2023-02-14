import express, { Application } from "express";
import clientRoutes from "../routes/clients.routes";
import cors from "cors";

import db from "../db/connection";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    clients: "/api/clients",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    this.middlewares();
    this.routes();
  }
  async dbConnection() {
    try {
      await db.authenticate();
    } catch (error) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.clients, clientRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

export default Server;

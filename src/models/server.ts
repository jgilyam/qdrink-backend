import express, { Application } from "express";
import clientRoutes from "../routes/clients.routes";
import cors from "cors";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    clients: "/api/clients",
  };

  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT || "8000";

    this.dbConnection();
    this.middlewares();
    this.routes();
  }
  async dbConnection() {}

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

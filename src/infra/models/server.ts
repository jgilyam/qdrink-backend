import express, { Application } from "express";
import clientRoutes from "../routes/CustomerRoute";
import cors from "cors";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    customers: "/api/customers",
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
    this.app.use(this.apiPaths.customers, clientRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto!!!!!!!!!!!!!!! " + this.port);
    });
  }
}

export default Server;

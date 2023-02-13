import express, { Application } from "express";
import clientRoutes from "../routes/clients.routes";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    clients: "/api/clients",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    this.routes();
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

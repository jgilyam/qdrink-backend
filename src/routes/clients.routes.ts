import { Router } from "express";
import {
  addClient,
  deleteClient,
  editClient,
  findAllClients,
  findOneClient,
} from "../controllers/clients.controller";

const router = Router();

router.get("/", findAllClients);
router.get("/:id", findOneClient);
router.post("/", addClient);
router.put("/:id", editClient);
router.delete("/:id", deleteClient);

export default router;

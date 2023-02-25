import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAllClients = async (req: Request, res: Response) => {
  const clients = await prisma.client.findMany();
  res.json(clients);
};

export const findOneClient = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: "find one client",
    id,
  });
};

export const addClient = async (req: Request, res: Response) => {
  const { body } = req;

  console.log(body);

  res.json({
    msg: "add a client",
    body,
  });
};

export const editClient = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  res.json({
    msg: "edit one client",
    body,
    id,
  });
};

export const deleteClient = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: "delete one client",
    id,
  });
};

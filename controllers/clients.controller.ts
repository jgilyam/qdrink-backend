import { Request, Response } from "express";

export const findAllClients = (req: Request, res: Response) => {
  res.json({
    msg: "findAllClients",
  });
};

export const findOneClient = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: "find one client",
    id,
  });
};

export const addClient = (req: Request, res: Response) => {
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

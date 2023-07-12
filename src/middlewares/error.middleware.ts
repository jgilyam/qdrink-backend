import { NextFunction, Request, Response } from 'express';

const errorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {

    const message: string = error.message || 'Something went wrong';
    return res.status(500).json({ message });
  } catch (err) {
    return next();
  }
};
export default errorMiddleware;

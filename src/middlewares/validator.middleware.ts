import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validateFields = async (req: Request<{},{},{},{}>, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors: any = [];
  errors
    .array()
    .forEach((err) => extractedErrors.push({ [err.type]: err.msg }));

  return res.status(400).json({
    errors: extractedErrors,
  });
  
};

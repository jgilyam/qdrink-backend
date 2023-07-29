import { NextFunction, Request, Response } from 'express';

import { ApiErrorResponse, ApiErrorResponseImpl } from '../../../../common/exception.response';
import { HttpCode } from '../../../../common/http.codes';
import { CustomerNotFoundException } from '../../domain/errors/customer.notFound.exception';

const customerErrorHandler = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { method, baseUrl, params, body, query } = req
    let  detail = error.message
    let code = "customer000"
    let httpCode = HttpCode.INTERNAL_SERVER_ERROR
    const instance = `${method} ${baseUrl}`;
    const { stack } = error;
    
    let errorResponse : ApiErrorResponse = new ApiErrorResponseImpl(Error.name, httpCode, detail, instance, code);

    if (error instanceof CustomerNotFoundException){
      code = "customer001"
      httpCode = HttpCode.NOT_FOUND
      errorResponse = new ApiErrorResponseImpl(CustomerNotFoundException.name, httpCode, detail, instance, code)
    }
  
    console.log(JSON.stringify({params, body, query}, undefined, 2))
    console.log(JSON.stringify({errorResponse, stack}, undefined, 2))
    return res.status(httpCode).json(errorResponse);
  } catch (err) {
    return next();
  }
};
export default customerErrorHandler;
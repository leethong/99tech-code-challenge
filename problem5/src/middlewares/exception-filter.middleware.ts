import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions/http.exception';
import { HTTP_STATUS_CODE } from '../util/constant';

export function exceptionFilterMiddleware(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof HttpException) {
    const error: any = {
      statusCode: err.status,
      message: err.message,
    };
    if (err.details) {
      error.details = err.details;
    }
    return res.status(err.status).json(error);
  }

  // Fallback: unhandled errors
  console.error(err); // Optional: log stack trace
  return res.status(HTTP_STATUS_CODE.INTERNAL_ERROR).json({
    statusCode: HTTP_STATUS_CODE.INTERNAL_ERROR,
    message: 'Something went wrong!',
  });
}

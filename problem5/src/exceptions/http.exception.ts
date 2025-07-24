export class HttpException<T> extends Error {
  status: number;
  message: string;
  details?: T;

  constructor(status: number, message: string, details?: T) {
    super(message);
    this.status = status;
    this.message = message;
    this.details = details;

    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}

import { HttpException } from './http.exception';

export class BadRequestException<T> extends HttpException<T> {
  constructor(message = 'Bad Request', details?: T) {
    super(400, message, details);
  }
}

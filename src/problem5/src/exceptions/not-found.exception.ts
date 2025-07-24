import { HttpException } from './http.exception';

export class NotFoundException extends HttpException<any> {
  constructor(message = 'Resource Not Found') {
    super(404, message);
  }
}

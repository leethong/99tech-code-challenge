import { BadRequestException } from '../exceptions/bad-request.exception';

export function validateMiddleware(schema: any) {
  return (req: any, res: any, next: any) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      throw new BadRequestException('Validation error', result.error.flatten().fieldErrors);
    }
    req.body = result.data;
    next();
  };
}

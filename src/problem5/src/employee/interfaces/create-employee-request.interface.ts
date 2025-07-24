import { IBaseEmployeeRequest } from './base-employee-request.interface';

export interface ICreateEmployeeRequest extends IBaseEmployeeRequest {
  email: string;
  name: string;
}

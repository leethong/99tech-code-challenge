import { IBaseEmployeeRequest } from './base-employee-request.interface';

export interface ISearchEmployeeRequest extends IBaseEmployeeRequest {
  email?: string;
}

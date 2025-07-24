import { BadRequestException } from '../exceptions/bad-request.exception';
import { ICreateEmployeeRequest } from './interfaces/create-employee-request.interface';
import { ISearchEmployeeRequest } from './interfaces/search-employee-request.interface';
import { IUpdateEmployeeRequest } from './interfaces/update-employee-request.interface';
import { IEmployee, EmployeeModel } from './models/employee.model';

const createEmployee = async (data: ICreateEmployeeRequest): Promise<IEmployee> => {
  const existEmployee = await EmployeeModel.findOneWithDeleted({ email: data.email });
  if (existEmployee) {
    throw new BadRequestException('Email already exist!');
  }
  const employee = new EmployeeModel(data);
  return employee.save();
};

const getAllEmployees = async (filter: ISearchEmployeeRequest): Promise<IEmployee[]> => {
  const conditions: Record<string, any> = {};
  if (filter?.email && filter.email.length) {
    conditions.email = { $regex: new RegExp(filter.email, 'i') };
  }
  if (filter?.name && filter.name.length) {
    conditions.name = { $regex: new RegExp(filter.name, 'i') };
  }
  return EmployeeModel.find(conditions);
};

const getEmployeeById = async (id: string): Promise<IEmployee | null> => {
  return EmployeeModel.findById(id);
};

const updateEmployee = async (
  id: string,
  data: IUpdateEmployeeRequest,
): Promise<IEmployee | null> => {
  return EmployeeModel.findByIdAndUpdate(id, data, { new: true });
};

const deleteEmployee = async (id: string): Promise<void> => {
  await EmployeeModel.deleteById(id);
};
const employeeService = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
export default employeeService;

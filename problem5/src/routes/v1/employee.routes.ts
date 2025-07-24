import { Router } from 'express';
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from '../../employee/employee.controller';
import { validateMiddleware } from '../../middlewares/validate.middleware';
import employeeValidationSchema from '../../employee/schemas/validate-employee.schema';

const EmployeeRouter = Router();

EmployeeRouter.get('/', getEmployees);

EmployeeRouter.post(
  '/',
  validateMiddleware(employeeValidationSchema.createEmployeeSchema),
  createEmployee,
);

EmployeeRouter.get('/:id', getEmployee);

EmployeeRouter.put(
  '/:id',
  validateMiddleware(employeeValidationSchema.updateEmployeeSchema),
  updateEmployee,
);
EmployeeRouter.delete('/:id', deleteEmployee);

export default EmployeeRouter;

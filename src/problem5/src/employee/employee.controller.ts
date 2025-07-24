import { Request, Response } from 'express';
import employeeService from './employee.service';
import { NotFoundException } from '../exceptions/not-found.exception';

export const createEmployee = async (req: Request, res: Response) => {
  const employee = await employeeService.createEmployee(req.body);
  res.status(201).json(employee);
};

export const getEmployees = async (req: Request, res: Response) => {
  const employees = await employeeService.getAllEmployees(req.query);
  res.json(employees);
};

export const getEmployee = async (req: Request, res: Response) => {
  const employee = await employeeService.getEmployeeById(req.params.id);
  if (!employee) {
    throw new NotFoundException('Employee not found');
  }
  res.json(employee);
};

export const updateEmployee = async (req: Request, res: Response) => {
  const employee = await employeeService.updateEmployee(req.params.id, req.body);
  if (!employee) {
    throw new NotFoundException('Employee not found');
  }
  res.json(employee);
};

export const deleteEmployee = async (req: Request, res: Response) => {
  await employeeService.deleteEmployee(req.params.id);
  res.status(204).send();
};

import * as z from 'zod';

const createEmployeeSchema = z.object({
  email: z.email(),
  name: z.string(),
  dob: z.iso.date().optional(),
});

const updateEmployeeSchema = z.object({
  name: z.string().optional(),
  dob: z.iso.date().optional(),
});

const employeeValidationSchema = {
  createEmployeeSchema,
  updateEmployeeSchema,
};

export default employeeValidationSchema;

import { Router } from 'express';
import employeeRoutes from './employee.routes';

const v1Router = Router();
v1Router.use('/employees', employeeRoutes);

export default v1Router;

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import v1Routes from './routes/v1';
import mongoose from 'mongoose';
import { systemConfig } from './config/system';
import { exceptionFilterMiddleware } from './middlewares/exception-filter.middleware';

mongoose
  .connect(systemConfig.mongoDBUri, { maxPoolSize: 10, minPoolSize: 1 })
  .then(() => console.log(`Worker ${process.pid}: MongoDB connected`))
  .catch((err) => console.error(`Worker ${process.pid}: MongoDB error:`, err));

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// routes
app.use('/v1', v1Routes);

app.use(exceptionFilterMiddleware);

// this is simple API for demo purpose. So I ignore some futher components like swagger, logging, uni-test, Dockerfile, ...
export default app;

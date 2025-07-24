import dotenv from 'dotenv';
dotenv.config({ quiet: true });

export const systemConfig = {
  port: process.env.PORT || 3000,
  mongoDBUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/demodb',
  maxWorkers: parseInt(process.env.MAX_WORKERS || '3', 10) || 3,
};

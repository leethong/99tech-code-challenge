import cluster, { Worker } from 'cluster';
import { cpus } from 'os';
import app from './app';
import { systemConfig } from './config/system';

if (cluster.isPrimary) {
  const numCPUs = cpus().length;
  const maxWorkers = Math.min(numCPUs, systemConfig.maxWorkers);
  console.log(`Master ${process.pid} is running`);
  console.log(`Forking ${maxWorkers} workers...`);

  for (let i = 0; i < maxWorkers; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker: Worker) => {
    console.warn(`Worker ${worker.process.pid} died. Spawning a new one...`);
    cluster.fork();
  });
} else {
  app.listen(systemConfig.port, () => {
    console.log(`Worker ${process.pid} started at http://localhost:${systemConfig.port}`);
  });
}

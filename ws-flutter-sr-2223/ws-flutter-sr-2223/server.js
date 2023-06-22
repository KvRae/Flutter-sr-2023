import express from 'express';

const app = express();

const port = process.env.PORT || 9090;

import taskRoutes from './routes/task.js';

app.use(express.json());

app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
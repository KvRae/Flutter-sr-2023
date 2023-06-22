import express from 'express';

import { getAll, addAll } from '../controllers/task.js';
  
const router = express.Router();

router
  .route('/')
  .get(getAll)
  .post(addAll);
  
export default router;
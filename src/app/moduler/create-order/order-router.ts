import express from 'express';
import { orderControl } from './order-controler';
const router = express.Router();
// order router
router.post('/', orderControl.createOrder);

export const orderRouter = {
  router,
};

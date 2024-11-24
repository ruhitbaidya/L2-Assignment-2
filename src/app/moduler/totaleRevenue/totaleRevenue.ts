import express from 'express';
import { totalPriceRevenue } from './revenueRouter';

const router = express.Router();
// total revenue get router
router.get('/', totalPriceRevenue.getTotalRevenue);
export const totaleRevenue = {
  router,
};

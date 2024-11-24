import { NextFunction, Request, Response } from 'express';
import { OrderModel } from '../create-order/order-model';

// totale revenue controler
const getTotalRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const totaleRevenue = await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: '$totalPrice' },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
        },
      },
    ]);
    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: totaleRevenue,
    });
  } catch (err) {
    next(err);
  }
};

export const totalPriceRevenue = {
  getTotalRevenue,
};

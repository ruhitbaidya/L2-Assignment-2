import { NextFunction, Request, Response } from 'express';
import { orderServices } from './order-services';

// create order controler
const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productInfo = req.body;
    const orderrResult = await orderServices.orderCheckandCreate(productInfo);
    res.status(200).json({
      message: orderrResult?.message,
      success: orderrResult?.success,
      data: orderrResult?.data,
    });
  } catch (err) {
    next(err);
  }
};

export const orderControl = {
  createOrder,
};

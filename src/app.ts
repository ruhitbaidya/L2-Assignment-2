import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { cycleRouter } from './app/moduler/create-cycle/cycle-router';
import { orderRouter } from './app/moduler/create-order/order-router';
import { totaleRevenue } from './app/moduler/totaleRevenue/totaleRevenue';
import { config } from './app/config/config';
const app = express();

// JSON body parser and url-encoded middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use(cors());

// Router connection middleware
app.use('/api/products', cycleRouter.router);
app.use('/api/orders', orderRouter.router);
app.use('/api/orders/revenue', totaleRevenue.router);

// demo router for testing
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World',
    success: true,
    data: 'Welcome Our Site',
  });
});
// global generic error handel middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const isValidationError = err.name === 'ValidationError';
  const statusCode = isValidationError ? 400 : err.statusCode || 500;

  const errorResponse = {
    message: isValidationError
      ? 'Validation failed'
      : err.message || 'An unexpected error occurred',
    success: false,
    error: isValidationError ? err : { name: err.name || 'Error' },
    stack: config.node_env === 'development' ? err.stack : undefined,
  };

  res.status(statusCode).json(errorResponse);
});
export default app;

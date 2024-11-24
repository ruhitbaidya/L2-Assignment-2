import { Model, model, Schema } from 'mongoose';
import { OrederData } from './order-interface';

// order schema
const OrderSchema = new Schema<OrederData>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Please provide a valid email address',
    ],
  },
  product: { type: Schema.Types.ObjectId, ref: 'create-cycle', required: true },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [1, 'Quantity must be at least 1'],
  },
  totalPrice: {
    type: Number,
    required: [true, 'Total price is required'],
    min: [0, 'Total price must be a positive number'],
  },
});

// order create model
export const OrderModel: Model<OrederData> = model<OrederData>(
  'create-order',
  OrderSchema,
);

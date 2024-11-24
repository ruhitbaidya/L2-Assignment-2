import mongoose from 'mongoose';
// createOrder ts type for schema model
export type OrederData = {
  email: string;
  product: mongoose.Schema.Types.ObjectId;
  quantity: number;
  totalPrice: number;
};

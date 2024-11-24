import { CycleModel } from '../create-cycle/cycle-model';
import { OrederData } from './order-interface';
import { OrderModel } from './order-model';

// create order anc check queantity and isStock
const orderCheckandCreate = async (orderData: OrederData) => {
  const { product, quantity, email } = orderData;
  const cycleget = await CycleModel.findById({ _id: product });
  // check cycle have or not
  if (!cycleget) {
    return {
      message: 'Cycle Not Fount',
      success: false,
      data: {},
    };
  }

  // check cycle quantity have or not
  if (cycleget.quantity === 0) {
    const updateQueantity = await CycleModel.findByIdAndUpdate(
      { _id: product },
      { $set: { inStock: false } },
      { new: true },
    );
    return {
      message: 'Insufficient stock',
      success: false,
      data: updateQueantity,
    };
  }

  // check cycle quantity have or not
  if (quantity > 0) {
    const lessInStock = cycleget?.quantity - quantity;
    await CycleModel.findByIdAndUpdate(
      { _id: product },
      { $set: { quantity: lessInStock } },
      { new: true },
    );
    const createOrders = new OrderModel({
      product,
      quantity,
      email,
      totalPrice: cycleget.price,
    });
    const result = await createOrders.save();
    return {
      message: 'Order created successfully',
      success: true,
      data: result,
    };
  }
};

export const orderServices = {
  orderCheckandCreate,
};

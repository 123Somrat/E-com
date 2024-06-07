import { Order } from '../../model/order';
import orderType from '../../model/order/orderType';
import { ProductModel } from '../../model/product';
import mongoose from 'mongoose';
import checkingProductAndQuantityAndStock from './utils';

/**
 *
 * @param data
 * @returns Created new order
 */
const createOrder = async (data: orderType) => {
  const { productId } = data;

  // Start a session
  const session = await mongoose.startSession();
  session.startTransaction();

  // Utility function to check product availability and update product details
  const { product, validatedData } =
    await checkingProductAndQuantityAndStock(data);

  // Store the order document in db
  const order = await Order.create(validatedData);

  // update the product
  const updatedProductQuantity = await ProductModel.findByIdAndUpdate(
    { _id: productId },
    product,
    { upsert: false },
  );

  // End session after commit a succesfull transection
  await session.commitTransaction();
  session.endSession();
  return order;
};

/**
 *
 * @returns
 */
const getAllOrders = async ({ email }: { email: string }) => {
  // filter with query params
  const filter = {
    email: { $regex: email, $options: 'i' },
  };

  let orders;
  // Retrive all orders from db
  if (email) {
    orders = await Order.find(filter);
  } else {
    orders = await Order.find({});
  }

  // return orders
  return orders;
};

export = {
  createOrder,
  getAllOrders,
};

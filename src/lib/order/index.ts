import { ObjectId } from 'mongodb';
import { Order } from '../../model/order';
import orderType from '../../model/order/orderType';
import { ProductModel } from '../../model/product';
import HttpError from '../../utils/customError';

/**
 *
 * @param data
 * @returns Created new order
 */
const createOrder = async (data: orderType) => {
  const { productId } = data;
  // Get the product details from product

  const product = await ProductModel.findOne({ _id: new ObjectId(productId) });

  if ((product?.inventory.quantity as number) < data.quantity) {
    throw new HttpError('Opps product out of stock', 400, 's');
  }

  const order = await Order.create(data);
  return order;
};

export = {
  createOrder,
};

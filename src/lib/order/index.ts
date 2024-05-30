import { Order } from '../../model/order';
import orderType from '../../model/order/orderType';

/**
 *
 * @param data
 * @returns Created new order
 */
const createOrder = async (data: orderType) => {
  const order = await Order.create(data);
  return order;
};

export = {
  createOrder,
};

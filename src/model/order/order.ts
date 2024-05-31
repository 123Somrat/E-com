import { Schema, model } from 'mongoose';
import orderType from './orderType';

const order = new Schema<orderType>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Order = model<orderType>('Order', order);

export default Order;

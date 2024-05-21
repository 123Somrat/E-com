import { Schema, model } from 'mongoose';
import Product from './productType';

const VarientSchema = new Schema({ type: String, Value: String });
const InventorySchema = new Schema({ quantity: Number, inStock: Boolean });
const Product = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    enum: ['smartphone', 'Apple', 'iOS'],
  },
  variants: {
    type: [VarientSchema],
    required: true,
  },
  inventory: {
    type: InventorySchema,
    required: true,
  },
});


const ProductModel = model('Product',Product);

export default ProductModel;
import { Schema, model } from 'mongoose';
import Product from './productType';

// Define VarientSchema
const VarientSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});
// Define InventorySchema
const InventorySchema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

//Define Product Schema
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
    required: true,
    defaults: 'smartphone',
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

const ProductModel = model('Product', Product);

export default ProductModel;

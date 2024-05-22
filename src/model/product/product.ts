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
    required: [true,"Quantity is required"],
  },
  inStock: {
    type: Boolean,
    required: [true,'Instock is required'],
  },
});

//Define Product Schema
const Product = new Schema<Product>({
  name: {
    type: String,
    required: [true,"Name is required"],
    minlength:[5,'Must be 5 or more cherecters long']
  },
  description: {
    type: String,
    required: [true,"Descroption is required"],
  },
  price: {
    type: Number,
    required: [true,'Price is required'],
  },
  category: {
    type: String,
    required:[true,'Category is required'],
  },
  tags: {
    type: String,
    enum: ['smartphone', 'Apple', 'iOS'],
    required: [true,"Choose a tag"],
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

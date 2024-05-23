import { ObjectId } from 'mongodb';
import { ProductModel } from '../../model/product';
import Product from '../../model/product/productType';
import HttpError from '../../utils/customError';

/**
 * Create a product
 * @param data
 * @returns Created Product
 */
const createProduct = async (data: Product) => {
  const product = await ProductModel.create(data);

  return product;
};

/**
 * get all products
 * @param param0
 * @returns allProducts
 */
const getProduct = async () => {
  const allProducts = await ProductModel.find({});
  return allProducts;
};

/**
 * get single product
 * @param id
 * @returns singleProduct
 */
const getSingleProduct = async (id: string) => {
  if (!id) {
    throw new Error('id is required');
  }
  // throwing error if id is empty or not exeist
  if (id.length < 12 || id.length > 12 || id === '') {
    throw new HttpError('Product not found', 404, 'Not Found');
  }

  // Queru in db and return the data if data found
  const singleProduct = await ProductModel.findOne({ _id: new ObjectId(id) });

  // return product
  return singleProduct;
};

export = { createProduct, getProduct, getSingleProduct };

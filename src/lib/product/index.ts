import { ObjectId } from 'mongodb';
import { ProductModel } from '../../model/product';
import Product from '../../model/product/productType';
import HttpError from '../../utils/customError';

/**
 
 * @param data
 * Create a product  
 * @returns Created Product
 */
const createProduct = async (data: Product) => {
  const product = await ProductModel.create(data);

  return product;
};

/**

 * @param param0
  * get all products
 * @returns allProducts
 */
const getProduct = async () => {
  const allProducts = await ProductModel.find({});
  return allProducts;
};

/**
 
 * @param id
 * Depends on @id retrun a product if it is exeist or throw error
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

/**
 *
 * @param id
 * Cheeking @id is valid or not
 * Checking given @id data is exeist or not in DB
 * @returns succes
 */
const deleteProduct = async (id: string) => {
  // Checking id is valid or not
  if (id.length < 12 || id.length > 24 || id === '') {
    throw new HttpError('Product not found', 404, 'Not Found');
  }

  // Checking is product exeist or not
  const isProductExeist = await ProductModel.findOne({ _id: new ObjectId(id) });
  if (!isProductExeist) {
    throw new HttpError('Product not found', 404, 'Not Found');
  }

  // Deleted the product
  const deletedProduct = await ProductModel.deleteOne({
    _id: new ObjectId(id),
  });
  return deletedProduct;
};

/**
 *
 * @param id
 * @param body
 * @returns updatedProduct
 */
const editSingleProduct = (id: string, body: Product) => {
  const checkingProductExiestOrNot = ProductModel.findOne({
    _id: new ObjectId(id),
  });

  if (!checkingProductExiestOrNot) {
    throw new HttpError('Product not found', 404, 'Not Found');
  }

  const updatedProduct = ProductModel.findByIdAndUpdate(id, body, {
    upsert: false,
  });
  return updatedProduct;
};

export = {
  createProduct,
  getProduct,
  getSingleProduct,
  deleteProduct,
  editSingleProduct,
};

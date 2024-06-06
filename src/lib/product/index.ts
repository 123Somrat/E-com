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

type QueruType = {
  page: number;
  limit: number;
  searchBy: string;
  sortBy: string;
  sortType: string;
};

/**
 * Find all articles
 * Pagination
 * Searching
 * Sorting
 * @param{*} param0
 * @returns
 */

const getProduct = async ({
  page,
  limit,
  searchBy,
  sortBy,
  sortType,
}: QueruType) => {
  let allProducts;

  // filter
  const filter = {
    name: { $regex: searchBy, $options: 'i' },
  };

  // sort
  const sortStr = `${sortType === 'dsc' ? '-' : ''}${sortBy}`;

  if (searchBy) {
    allProducts = await ProductModel.find(filter)
      .sort(sortStr)
      .skip(page * limit - limit)
      .limit(limit);
  } else {
    allProducts = await ProductModel.find()
      .sort(sortStr)
      .skip(page * limit - limit)
      .limit(limit);
  }

  return allProducts;
};

/**
 * Count all product
 * @param param0
 * @returns
 */
const count = async ({ searchBy = '' }) => {
  const filter = {
    name: { $regex: searchBy, $options: 'i' },
  };
  return ProductModel.countDocuments(filter);
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
  if (id.length < 12 || id.length > 24 || id === '') {
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
const editSingleProduct = async (id: string, body: Product) => {
  const checkingProductExiestOrNot = await ProductModel.findOne({
    _id: new ObjectId(id),
  });

  if (!checkingProductExiestOrNot) {
    throw new HttpError('Product not found', 404, 'Not Found');
  }

  const updatedProduct = await ProductModel.findByIdAndUpdate(
    { _id: new ObjectId(id) },
    body,
    {
      upsert: false,
    },
  );

  return updatedProduct;
};

export = {
  createProduct,
  getProduct,
  getSingleProduct,
  deleteProduct,
  editSingleProduct,
  count,
};

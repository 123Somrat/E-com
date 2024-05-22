import { ProductModel } from '../../model/product';
import Product from '../../model/product/productType';

const createProduct = async (data: Product) => {
  const product = await ProductModel.create(data);

  return product;
};

const getProduct = async () => {
  const allProducts = await ProductModel.find({});
  return allProducts;
};

export = { createProduct, getProduct };

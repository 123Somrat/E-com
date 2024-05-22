import { ProductModel } from '../../model/product';
import Product from '../../model/product/productType';

const createProduct = async (data: Product) => {
  const product = await ProductModel.create(data);

  return product;
};

export = { createProduct };

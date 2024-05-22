import { ProductModel } from '../../model/product';
import Product from '../../model/product/productType';

const createProduct = async ({
  name,
  description,
  price,
  category,
  tags,
  variants,
  inventory: { quantity, inStock },
}: Product) => {
  const product = await ProductModel.create({
    name,
    description,
    price,
    category,
    tags,
    variants,
    inventory: { quantity, inStock },
  });

  return product;
};

export = { createProduct };

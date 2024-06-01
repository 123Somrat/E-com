import orderType from '../../model/order/orderType';
import { ProductModel } from '../../model/product';
import { ObjectId } from 'mongodb';
import HttpError from '../../utils/customError';

const checkingProductAndQuantityAndStock = async (validatedData: orderType) => {
  const { productId, quantity } = validatedData;

  try {
    // Get the product details from product
    const product = await ProductModel.findOne({
      _id: new ObjectId(productId),
    });

    if (!product) {
      throw new HttpError('Product not found', 404, 'Not found');
    }

    if (
      (product?.inventory.quantity as number) < quantity ||
      product.inventory.inStock === false
    ) {
      throw new HttpError(
        'Opps product insufficient stock',
        400,
        'insufficient stock',
      );
    }

    // reduce the product quantity
    if (product) {
      product.inventory.quantity -= quantity;
    }

    if (product && product.inventory.quantity == 0) {
      product.inventory.inStock = false;
    }

    return { product, validatedData };
  } catch (error) {
    throw new Error();
  }
};

export default checkingProductAndQuantityAndStock;

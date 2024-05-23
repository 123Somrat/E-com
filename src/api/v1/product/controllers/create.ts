import { NextFunction, Request, Response } from 'express';
import productService from '../../../../lib/product';
import ProductValidationSchema from '../../../../model/product/productSchemaValidation';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { product: productInfo } = req.body;

  try {
    const isvalidated = ProductValidationSchema.safeParse(productInfo);

    if (!isvalidated.success) {
      const error = isvalidated.error?.errors.map((error) => {
        return {
          path: error.path,
          message: error.message,
        };
      });
      res.status(404).json({ error });
    }

    if (isvalidated.success) {
      // Called CreateProduct service and pass required data for Create Product
      const createdProduct = await productService.createProduct(
        isvalidated.data,
      );

      // Send the response
      res.status(201).json({
        status: '201',
        messege: 'Product Created Successfully',
        data: createdProduct,
      });
    }
  } catch (error) {
    next(error);
  }
};

export default create;

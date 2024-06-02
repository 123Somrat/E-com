import { Request, Response, NextFunction } from 'express';
import ProductValidationSchema from '../model/product/productSchemaValidation';

const productValidationMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const isvalidated = ProductValidationSchema.safeParse(req.body.product);

    if (!isvalidated.success) {
      const errors= isvalidated.error?.errors.map((error) => {
        return {
          path: error.path[error.path.length-1],
          message: error.message,
        };
      });
      return res.status(400).json({staus:400,code:'Bad request', errors});
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default productValidationMiddleWare;

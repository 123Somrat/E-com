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
      const error = isvalidated.error?.errors.map((error) => {
        return {
          path: error.path,
          message: error.message,
        };
      });
      res.status(404).json({ error });
    }
    next();
  } catch (error) {
    
    next(error);
  }
};

export default productValidationMiddleWare;

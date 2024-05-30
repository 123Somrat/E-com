import { Request, Response, NextFunction } from 'express';
import orderValidationSchema from '../model/order/orderSchemaValidation';

const orderValidationMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const isvalidated = orderValidationSchema.safeParse(req.body);

    if (!isvalidated.success) {
      const error = isvalidated.error?.errors.map((error) => {
        return {
          path: error.path,
          message: error.message,
        };
      });
      return res.status(400).json({ error });
    }

    next();
  } catch (error) {
    next(error);
  }
};
export default orderValidationMiddleWare;

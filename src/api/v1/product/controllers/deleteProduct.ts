import { Request, Response } from 'express';
import productService from '../../../../lib/product';
import asyncHandelar from '../../../../utils/asyncHandler';

/*
const asyncHandelar = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};
*/

const deleteProduct = asyncHandelar(async (req: Request, res: Response) => {
  const query = req.params.id;

  const deletedProduct = await productService.deleteProduct(query);

  res.status(200).json({
    status: '200',
    code: 'OK',
    messege: deletedProduct,
  });
});

export default deleteProduct;

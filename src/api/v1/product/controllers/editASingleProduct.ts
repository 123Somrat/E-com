/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import productService from '../../../../lib/product';

const asyncHandelar = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

const editASingleProduct = asyncHandelar(async (req, res) => {
  const productId = req.params.id;
  const updatedDate = req.body;

  // Call product update service
  const updatedProduct = await productService.editSingleProduct(
    productId,
    updatedDate,
  );

  res.status(200).json({
    status: '200',
    code: 'Updated successfully',
    data: updatedProduct,
  });
});

export default editASingleProduct;

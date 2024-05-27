import { Request, Response } from 'express';
import productService from '../../../../lib/product';
import asyncHandelar from '../../../../utils/asyncHandler';
const getAllProducts = asyncHandelar(async (_req: Request, res: Response) => {
  // Call getAll Product service
  const products = await productService.getProduct();

  // Send the response
  res.status(200).json({
    status: '200',
    code: 'Ok',
    data: products,
  });
});

export default getAllProducts;

import { Request, Response } from 'express';
import productService from '../../../../lib/product';
import asyncHandelar from '../../../../utils/asyncHandler';
const getAllProducts = asyncHandelar(async (req: Request, res: Response) => {
  const query = req.query.searchTerm as string;

  // Call getAll Product service
  const products = await productService.getProduct(query);

  // Send the response
  res.status(200).json({
    status: '200',
    code: 'Ok',
    data: products,
  });
});

export default getAllProducts;

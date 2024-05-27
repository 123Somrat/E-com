import { Request, Response } from 'express';
import productService from '../../../../lib/product';

import asyncHandelar from '../../../../utils/asyncHandler';

const create = asyncHandelar(async (req: Request, res: Response) => {
  const { product: productInfo } = req.body;

  // Call product create service
  const createdProduct = await productService.createProduct(productInfo);

  // Send the response
  res.status(201).json({
    status: '201',
    messege: 'Product Created Successfully',
    data: createdProduct,
  });
});
export default create;

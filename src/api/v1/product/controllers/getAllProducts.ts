import { Request, Response } from 'express';
import productService from '../../../../lib/product';
const getAllProducts = async (_req: Request, res: Response) => {
  try {
    // Call the getproduct service
    const products = await productService.getProduct();

    // Send the response
    res.status(200).json({
      status: '200',
      code: 'Ok',
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: '500',
      code: 'Internal server error',
      messege: 'An unexpected error occurred.',
    });
  }
};

export default getAllProducts;

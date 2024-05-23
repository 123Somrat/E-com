import { NextFunction, Request, Response } from 'express';
import productService from '../../../../lib/product';
const getAllProducts = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
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
    next(error);
  }
};

export default getAllProducts;

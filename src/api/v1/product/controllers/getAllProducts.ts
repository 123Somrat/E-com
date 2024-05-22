import { Request, Response } from 'express';
import prductService from '../../../../lib/product';
const getAllProducts = async (_req: Request, res: Response) => {
  try {
    // Call the getproduct service
    const products = await prductService.getProduct();

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
      messege: 'Oops something wrong in our side',
    });
  }
};

export default getAllProducts;

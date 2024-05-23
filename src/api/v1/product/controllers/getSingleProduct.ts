import { NextFunction, Request, Response } from 'express';
import prductService from '../../../../lib/product';

const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const query = req.params.id;

    // Call getsingle product service for getting single product from db
    const singleProduct = await prductService.getSingleProduct(query);

    // Response send for succesfull resquest
    res.status(200).json({
      status: '200',
      code: 'OK',
      data: singleProduct,
    });
  } catch (error) {
    next(error);
  }
};

export default getSingleProduct;

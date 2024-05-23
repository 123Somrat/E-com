import { Request, Response } from 'express';
import prductService from '../../../../lib/product';
import HttpError from '../../../../utils/customError';

const getSingleProduct = async (req: Request, res: Response) => {
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
    if (error instanceof HttpError && error.status === 404) {
      // If product not found then send not found error
      res.status(404).json({
        status: '404',
        code: error.code,
        message: error.message,
      });
    } else {
      // For other errors, send internal server error
      res.status(500).json({
        status: '500',
        code: 'Internal Server Error',
        message: 'An unexpected error occurred.',
      });
    }
  }
};

export default getSingleProduct;

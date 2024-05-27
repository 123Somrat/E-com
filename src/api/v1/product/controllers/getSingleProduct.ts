import { Request, Response } from 'express';
import prductService from '../../../../lib/product';
import asyncHandelar from '../../../../utils/asyncHandler';

const getSingleProduct = asyncHandelar(async (req: Request, res: Response) => {
  const query = req.params.id;

  // Call getsingle product service for getting single product from db
  const singleProduct = await prductService.getSingleProduct(query);

  // Response send for succesfull resquest
  res.status(200).json({
    status: '200',
    code: 'OK',
    data: singleProduct,
  });
});

export default getSingleProduct;

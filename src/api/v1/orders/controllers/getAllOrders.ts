import { Request, Response } from 'express';
import orderServices from '../../../../lib/order';
import asyncHandelar from '../../../../utils/asyncHandler';

const getAllOrders = asyncHandelar(async (req: Request, res: Response) => {
  // query
  const email = req.query.email as string;

  // call getallOrders service
  const orders = await orderServices.getAllOrders({ email });

  res.status(200).json({
    status: '200',
    code: 'OK',
    data: orders,
  });
});
export default getAllOrders;

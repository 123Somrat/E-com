import { Request, Response } from 'express';
import orderServices from '../../../../lib/order';
import asyncHandelar from '../../../../utils/asyncHandler';


const getAllOrders = asyncHandelar(async (_req: Request, res: Response) => {
  // call getallOrders service
  const orders = await orderServices.getAllOrders();

  res.status(200).json({
    status: '200',
    code: 'OK',
    data: orders,
  });
});
export default getAllOrders;

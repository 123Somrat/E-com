import { Request, Response } from 'express';
import asyncHandelar from '../../../../utils/asyncHandler';
import orderService from '../../../../lib/order';

const createOrder = asyncHandelar(async (req: Request, res: Response) => {
  const orderInfo = req.body;

  // TODO : validate orders data;

  // Call orderCreate service
  const order = await orderService.createOrder(orderInfo);

  //Send response
  res.status(201).json({
    status: '201',
    code: 'Order Created Successfully',
    data: order,
  });
});

export default createOrder;

/* eslint-disable @typescript-eslint/no-explicit-any */
import {  Request, Response } from 'express';
import productService from '../../../../lib/product';
import asyncHandelar from '../../../../utils/asyncHandler';



const editASingleProduct = asyncHandelar(async (req:Request, res:Response) => {
  const productId = req.params.id;
  const updatedDate = req.body.product;
   

  // Call product update service
  const updatedProduct = await productService.editSingleProduct(
    productId,
    updatedDate,
  );

  res.status(200).json({
    status: '200',
    code: 'Updated successfully',
    data: updatedProduct,
  });
});

export default editASingleProduct;

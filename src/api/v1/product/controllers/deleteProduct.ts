import { NextFunction, Request, Response } from 'express';
import productService from '../../../../lib/product';
const deleteProduct = async (req: Request, res: Response , next:NextFunction) => {
  try {
    const query = req.params.id;
    const deletedProduct = await productService.deleteProduct(query)
     res.status(200).json({
         status:'200',
         code :"OK",
         messege : deletedProduct
     })
  } catch (error) {
       next(error);
  }
};

export default deleteProduct;

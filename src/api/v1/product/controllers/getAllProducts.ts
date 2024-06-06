import { Request, Response } from 'express';
import productService from '../../../../lib/product';
import asyncHandelar from '../../../../utils/asyncHandler';
import query from '../../../../utils/query';

const getAllProducts = asyncHandelar(async (req: Request, res: Response) => {
  // Query params
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const searchBy = (req.query.searchBy as string) || '';
  const sortBy = (req.query.sortBy as string) || 'price';
  const sortType = (req.query.sortType as string) || 'dsc';



  // Call getAll Product service
  const products = await productService.getProduct({
    page,
    limit,
    searchBy,
    sortBy,
    sortType,
  });

   // Calculated document depends on search
  const totalItems = await productService.count({ searchBy });
  // Pagination
  const pagination = query.getPagination({ page, limit, totalItems });



  // Send the response
  res.status(200).json({
    status: '200',
    code: 'Ok',
    data: products,
    pagination:pagination
  });
});

export default getAllProducts;

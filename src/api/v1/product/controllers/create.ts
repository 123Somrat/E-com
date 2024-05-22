import { Request, Response } from 'express';
import productService from '../../../../lib/product';

const create = async (req: Request, res: Response) => {
  const {
    name,
    description,
    price,
    category,
    tags,
    variants,
    inventory: { quantity, inStock },
  } = req.body;

  try {
    //Call productCreate service and passing data for create product
    const createdProduct = await productService.createProduct({
      name,
      description,
      price,
      category,
      tags,
      variants,
      inventory: { quantity, inStock },
    });

    // Send the response
    res.status(201).json({
      status: '201',
      messege: 'Product Created Successfully',
      data: createdProduct._id,
    });
  } catch (error) {
    res.status(404).json({
      status: '404',
      code: 'Bad Request',
      error: {
        feild: 'name',
        messge: 'Name feild can not empty',
      },
    });
  }
};

export default create;

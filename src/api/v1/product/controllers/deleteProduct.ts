import { Request, Response } from 'express';

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const query = req.params.id;
    console.log(query);
  } catch (error) {
    console.log(error);
  }
};

export default deleteProduct;

import express from 'express';
import controllers from '../api/v1/product';
import productValidationMiddleWare from '../middleware/productValidationMiddleWare';

const router = express.Router();

router
  .route('/api/v1/products')
  .get(controllers.getAllProducts)
  .post(productValidationMiddleWare,controllers.create);

router
  .route('/api/v1/products/:id')
  .get(controllers.getSingleProduct)
  .delete(controllers.deleteProduct)
  .patch(productValidationMiddleWare,controllers.editASingleProduct);

export default router;

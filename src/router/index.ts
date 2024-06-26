import express from 'express';
import { controllers as productController } from '../api/v1/product';
import { controllers as orderControllers } from '../api/v1/orders';
import productValidationMiddleWare from '../middleware/productValidationMiddleWare';
import orderValidationMiddleWare from '../middleware/orderValidationMiddleWare';

const router = express.Router();

/**
 * All products get route
 * Create a Product Route
 */
router
  .route('/api/v1/products')
  .get(productController.getAllProducts)
  .post(productValidationMiddleWare, productController.create);

/**
 * Get a single product route
 * Update a single product route
 * Delete a single product youte
 */
router
  .route('/api/v1/products/:id')
  .get(productController.getSingleProduct)
  .delete(productController.deleteProduct)
  .patch(productValidationMiddleWare, productController.editASingleProduct);

router
  .route('/api/v1/orders')
  .get(orderControllers.getAllOrders)
  .post(orderValidationMiddleWare, orderControllers.createOrder);

export default router;

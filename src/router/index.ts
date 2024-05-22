import express from 'express';
import controllers from '../api/v1/product';
const router = express.Router();

router.route('/api/v1/products').post(controllers.create);

export default router;

// order.routes.js
import express from 'express';
import * as OrderController from '../controllers/orderlist.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('', userAuth, OrderController.addOrder);
router.get('', userAuth, OrderController.getOrderList);
router.delete('/:orderId', userAuth, OrderController.removeOrder);

export default router;

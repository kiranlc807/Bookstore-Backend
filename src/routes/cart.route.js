import * as CartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';
import express from 'express';

const router = express.Router();

router.post('/:_id',userAuth,CartController.addToCart);

router.get('',userAuth,CartController.getCartItems);

router.delete('/:_id',userAuth,CartController.removeCartItem);

export default router;
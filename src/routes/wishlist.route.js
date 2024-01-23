// wishlist.routes.js
import express from 'express';
import * as WishlistController from '../controllers/wishlist.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/:_id', userAuth, WishlistController.addToWishlist);
router.get('', userAuth, WishlistController.getWishlistItems);
router.delete('/:_id', userAuth, WishlistController.removeWishlistItem);

export default router;

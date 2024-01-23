// wishlist.controller.js
import * as WishlistService from '../services/wishlist.service';
import HttpStatus from 'http-status-codes';

export const addToWishlist = async (req, res) => {
  try {
    const wishlist = await WishlistService.addToWishlistService(req.user.userId, req.params._id);

    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: wishlist.books,
      message: 'Book added to wishlist successfully',
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message,
    });
  }
};

export const getWishlistItems = async (req, res) => {
  try {
    const wishlist = await WishlistService.getWishlistItemsService(req.user.userId);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: wishlist.books,
      message: 'Wishlist items retrieved successfully',
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: 'Wishlist is empty',
    });
  }
};

export const removeWishlistItem = async (req, res) => {
  try {
    const wishlist = await WishlistService.removeWishlistItemService(req.user.userId, req.params._id);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: wishlist.books,
      message: 'Item removed from wishlist successfully',
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message,
    });
  }
};

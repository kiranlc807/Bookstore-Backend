// wishlist.service.js
import Wishlist from '../models/wishlist.model';
import Book from '../models/book.model';

const findOrCreateWishlist = async (userId) => {
  let wishlist = await Wishlist.findOne({ userId });
  if (!wishlist) {
    wishlist = new Wishlist({ userId, books: [] });
    await wishlist.save();
  }
  return wishlist;
};

export const addToWishlistService = async (userId, bookId) => {
  try {
    const wishlist = await findOrCreateWishlist(userId);

    const existingWishlistItem = wishlist.books.find(item => item.bookId.equals(bookId));

    const book = await Book.findById(bookId);

    if (!book) {
      throw new Error('Book not found');
    }

    if (existingWishlistItem) {
      throw new Error('Book already exists in the wishlist');
    } else {
      wishlist.books.push({ bookId });
    }

    await wishlist.save();

    return wishlist;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getWishlistItemsService = async (userId) => {
  try {
    const wishlist = await findOrCreateWishlist(userId);
    return wishlist;
  } catch (error) {
    throw new Error('Error fetching wishlist items');
  }
};

export const removeWishlistItemService = async (userId, bookId) => {
  try {
    const wishlist = await findOrCreateWishlist(userId);

    const wishlistItemIndex = wishlist.books.findIndex(item => item.bookId.equals(bookId));

    if (wishlistItemIndex === -1) {
      throw new Error('Wishlist item not found');
    }

    wishlist.books.splice(wishlistItemIndex, 1);

    await wishlist.save();

    return wishlist;
  } catch (error) {
    throw new Error('Error removing from wishlist');
  }
};

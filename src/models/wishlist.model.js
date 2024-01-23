// wishlist.model.js
import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  books: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    },
  ],
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

export default Wishlist;

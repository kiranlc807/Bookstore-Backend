import Cart from '../models/cart.model';
import Book from '../models/book.model';

export const addToCart = async (userId,bookId,quantity = 1)=>{
        // Step 1: Find the existing cart item
        const existingCartItem = await Cart.findOne({ userId, bookId });
        // Step 2: Check if the book exists
        const book = await Book.findById(bookId);
        if (!book) {
          throw new Error('Book not found');
        }
        if(book.quantity<=0)
        {
            throw new Error('Out of Stock')
        }
    
        // Step 3: Update cart item or create a new one
        if (existingCartItem) {
          // If the item already exists in the cart, update the quantity and total
          existingCartItem.quantity += quantity;
          existingCartItem.total = existingCartItem.quantity * book.discountPrice;
          await existingCartItem.save();
        } else {
          // If the item does not exist, create a new cart item with calculated total
          const total = quantity * book.discountPrice;
          const newCartItem = new Cart({ userId, bookId, quantity, total });
          await newCartItem.save();
          console.log(newCartItem);
        }
    
        // Step 4: Update the book quantity
        book.quantity -= quantity;
    
        // Step 5: Save the book changes
        await book.save();
    
        // Step 6: Return the updated cart item for display in the response
        const updatedCartItem = await Cart.findOne({ userId, bookId });
        return updatedCartItem;
};

export const getCartItems = async(userId)=> {
    try {
      const cartItems = await Cart.find({userId});
      return cartItems;
    } catch (error) {
      throw new Error('Error fetching cart items');
    }
  }

export const removeCartItem = async(userId, bookId)=>{
    try {
        // Step 1: Find the cart item
        const cartItem = await Cart.findOne({userId,bookId});
        console.log(bookId,userId);
        // Step 2: Check if the cart item exists
        console.log(cartItem);
        if (cartItem===null) {
          throw new Error('Cart item not found');
        }
        // Step 3: Update the book quantity and remove the cart item
        const book = await Book.findById(bookId);
        
        if (!book) {
          throw new Error('Book not found');
        }
    
        book.quantity += cartItem.quantity;
    
        // Remove the cart item
        await cartItem.remove();
    
        // Save the book changes
        await book.save();
    
        // Step 4: Return success message
        return 'Item removed from cart successfully';
      } catch (error) {
        // Step 5: Handle errors and throw a custom error message
        throw new Error('Error removing from cart');
      }
  }

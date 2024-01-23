// import * as CartService from '../services/cart.service';
// import HttpStatus from 'http-status-codes';

// export const addToCart = async(req,res)=>{
//     try{
//         const cartItem = await CartService.addToCart(req.user.userId,req.params._id);
        
//         res.status(HttpStatus.CREATED).json({
//             code:HttpStatus.CREATED,
//             data:cartItem,
//             message:'Book Added to Cart Successfully'
//         });
//     }catch(error){
//         res.status(HttpStatus.BAD_REQUEST).json({
//             code:HttpStatus.BAD_REQUEST,
//             message:error.message
//         });
//     }
// }

// export const getCartItems = async(req,res)=>{
//     try{
//         const cartItems = await CartService.getCartItems(req.user.userId);
//         res.status(HttpStatus.OK).json({
//             code:HttpStatus.OK,
//             data:cartItems,
//             message:'Cart Item Retrived Successfully'
//         });
//     }catch(error){
//         res.status(HttpStatus.BAD_REQUEST).json({
//             code:HttpStatus.BAD_REQUEST,
//             message:'Cart is Empty'
//         });
//     }
// };

// export const removeCartItem = async (req, res) => {
//     try {
//       const data = await CartService.removeCartItem(req.user.userId, req.params._id);
//       res.status(HttpStatus.OK).json({
//         code: HttpStatus.OK,
//         data: data
//       });
//     } catch (error) {
//       res.status(HttpStatus.BAD_REQUEST).json({
//         code: HttpStatus.BAD_REQUEST,
//         message: error.message
//       });
//     }
//   };
// cart.controller.js
import * as CartService from '../services/cart.service';
import HttpStatus from 'http-status-codes';

export const addToCart = async (req, res) => {
  try {
    const cart = await CartService.addToCartService(req.user.userId, req.params._id);

    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: cart.books,
      message: 'Book added to cart successfully',
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message,
    });
  }
};

export const getCartItems = async (req, res) => {
  try {
    const cart = await CartService.getCartItemsService(req.user.userId);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: cart.books,
      message: 'Cart items retrieved successfully',
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: 'Cart is empty',
    });
  }
};

export const removeCartItem = async (req, res) => {
  try {
    const cart = await CartService.removeCartItemService(req.user.userId, req.params._id);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: cart.books,
      message: 'Item removed from cart successfully',
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message,
    });
  }
};

export const reduceQuantity = async (req, res) => {
    try {
      const cart = await CartService.reduceQuantityService(req.user.userId, req.params._id);
  
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: cart.books,
        message: 'Book quantity reduced in the cart successfully',
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: error.message,
      });
    }
  };

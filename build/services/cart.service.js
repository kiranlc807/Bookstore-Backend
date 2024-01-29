"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeCartItemService = exports.reduceQuantityService = exports.getCartItemsService = exports.addToCartService = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _cart = _interopRequireDefault(require("../models/cart.model"));
var _book = _interopRequireDefault(require("../models/book.model"));
// import Cart from '../models/cart.model';
// import Book from '../models/book.model';

// export const addToCart = async (userId,bookId,quantity = 1)=>{
//         // Step 1: Find the existing cart item
//         const existingCartItem = await Cart.findOne({ userId, bookId });
//         // Step 2: Check if the book exists
//         const book = await Book.findById(bookId);
//         if (!book) {
//           throw new Error('Book not found');
//         }
//         if(book.quantity<=0)
//         {
//             throw new Error('Out of Stock')
//         }

//         // Step 3: Update cart item or create a new one
//         if (existingCartItem) {
//           // If the item already exists in the cart, update the quantity and total
//           existingCartItem.quantity += quantity;
//           existingCartItem.total = existingCartItem.quantity * book.discountPrice;
//           await existingCartItem.save();
//         } else {
//           // If the item does not exist, create a new cart item with calculated total
//           const total = quantity * book.discountPrice;
//           const newCartItem = new Cart({ userId, bookId, quantity, total });
//           await newCartItem.save();
//           console.log(newCartItem);
//         }

//         // Step 4: Update the book quantity
//         book.quantity -= quantity;

//         // Step 5: Save the book changes
//         await book.save();

//         // Step 6: Return the updated cart item for display in the response
//         const updatedCartItem = await Cart.findOne({ userId, bookId });
//         return updatedCartItem;
// };

// export const getCartItems = async(userId)=> {
//     try {
//       const cartItems = await Cart.find({userId});
//       return cartItems;
//     } catch (error) {
//       throw new Error('Error fetching cart items');
//     }
//   }

// export const removeCartItem = async(userId, bookId)=>{
//     try {
//         // Step 1: Find the cart item
//         const cartItem = await Cart.findOne({userId,bookId});
//         console.log(bookId,userId);
//         // Step 2: Check if the cart item exists
//         console.log(cartItem);
//         if (cartItem===null) {
//           throw new Error('Cart item not found');
//         }
//         // Step 3: Update the book quantity and remove the cart item
//         const book = await Book.findById(bookId);

//         if (!book) {
//           throw new Error('Book not found');
//         }

//         book.quantity += cartItem.quantity;

//         // Remove the cart item
//         await cartItem.remove();

//         // Save the book changes
//         await book.save();

//         // Step 4: Return success message
//         return 'Item removed from cart successfully';
//       } catch (error) {
//         // Step 5: Handle errors and throw a custom error message
//         throw new Error('Error removing from cart');
//       }
//   }

// cart.service.js

var findOrCreateCart = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId) {
    var cart;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _cart["default"].findOne({
            userId: userId
          });
        case 2:
          cart = _context.sent;
          if (cart) {
            _context.next = 7;
            break;
          }
          cart = new _cart["default"]({
            userId: userId,
            books: []
          });
          _context.next = 7;
          return cart.save();
        case 7:
          return _context.abrupt("return", cart);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function findOrCreateCart(_x) {
    return _ref.apply(this, arguments);
  };
}();
var addToCartService = exports.addToCartService = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId, bookId) {
    var quantity,
      cart,
      existingCartItem,
      book,
      total,
      _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          quantity = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 1;
          _context2.prev = 1;
          _context2.next = 4;
          return findOrCreateCart(userId);
        case 4:
          cart = _context2.sent;
          existingCartItem = cart.books.find(function (item) {
            return item.bookId.equals(bookId);
          });
          _context2.next = 8;
          return _book["default"].findById(bookId);
        case 8:
          book = _context2.sent;
          if (book) {
            _context2.next = 11;
            break;
          }
          throw new Error('Book not found');
        case 11:
          if (!(book.quantity <= 0)) {
            _context2.next = 13;
            break;
          }
          throw new Error('Out of Stock');
        case 13:
          if (existingCartItem) {
            existingCartItem.quantity += quantity;
            existingCartItem.total = existingCartItem.quantity * book.discountPrice;
          } else {
            total = quantity * book.discountPrice;
            cart.books.push({
              bookId: bookId,
              quantity: quantity,
              total: total
            });
          }

          // Update total quantity and total price in the cart
          cart.totalQuantity = cart.books.reduce(function (total, item) {
            return total + item.quantity;
          }, 0);
          cart.totalPrice = cart.books.reduce(function (total, item) {
            return total + item.total;
          }, 0);
          book.quantity -= quantity;
          _context2.next = 19;
          return cart.save();
        case 19:
          _context2.next = 21;
          return book.save();
        case 21:
          return _context2.abrupt("return", cart);
        case 24:
          _context2.prev = 24;
          _context2.t0 = _context2["catch"](1);
          throw new Error(_context2.t0.message);
        case 27:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 24]]);
  }));
  return function addToCartService(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var getCartItemsService = exports.getCartItemsService = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userId) {
    var cart;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return findOrCreateCart(userId);
        case 3:
          cart = _context3.sent;
          return _context3.abrupt("return", cart);
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          throw new Error('Error fetching cart items');
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function getCartItemsService(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var removeCartItemService = exports.removeCartItemService = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(userId, bookId) {
    var cart, cartItemIndex, book, removedItem;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return findOrCreateCart(userId);
        case 3:
          cart = _context4.sent;
          cartItemIndex = cart.books.findIndex(function (item) {
            return item.bookId.equals(bookId);
          });
          if (!(cartItemIndex === -1)) {
            _context4.next = 7;
            break;
          }
          throw new Error('Cart item not found');
        case 7:
          _context4.next = 9;
          return _book["default"].findById(bookId);
        case 9:
          book = _context4.sent;
          if (book) {
            _context4.next = 12;
            break;
          }
          throw new Error('Book not found');
        case 12:
          removedItem = cart.books[cartItemIndex];
          book.quantity += removedItem.quantity;
          cart.books.splice(cartItemIndex, 1);

          // Update total quantity and total price in the cart
          cart.totalQuantity = cart.books.reduce(function (total, item) {
            return total + item.quantity;
          }, 0);
          cart.totalPrice = cart.books.reduce(function (total, item) {
            return total + item.total;
          }, 0);
          _context4.next = 19;
          return cart.save();
        case 19:
          _context4.next = 21;
          return book.save();
        case 21:
          return _context4.abrupt("return", cart);
        case 24:
          _context4.prev = 24;
          _context4.t0 = _context4["catch"](0);
          throw new Error('Error removing from cart');
        case 27:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 24]]);
  }));
  return function removeCartItemService(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
var reduceQuantityService = exports.reduceQuantityService = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(userId, bookId) {
    var cart, cartItem, book;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return findOrCreateCart(userId);
        case 3:
          cart = _context5.sent;
          cartItem = cart.books.find(function (item) {
            return item.bookId.equals(bookId);
          });
          if (cartItem) {
            _context5.next = 7;
            break;
          }
          throw new Error('Cart item not found');
        case 7:
          _context5.next = 9;
          return _book["default"].findById(bookId);
        case 9:
          book = _context5.sent;
          if (book) {
            _context5.next = 12;
            break;
          }
          throw new Error('Book not found');
        case 12:
          if (!(cartItem.quantity > 1)) {
            _context5.next = 25;
            break;
          }
          cartItem.quantity -= 1;
          cartItem.total = cartItem.quantity * book.discountPrice;

          // Update total quantity and total price in the cart
          cart.totalQuantity = cart.books.reduce(function (total, item) {
            return total + item.quantity;
          }, 0);
          cart.totalPrice = cart.books.reduce(function (total, item) {
            return total + item.total;
          }, 0);
          book.quantity += 1; // Increase the book quantity
          _context5.next = 20;
          return cart.save();
        case 20:
          _context5.next = 22;
          return book.save();
        case 22:
          return _context5.abrupt("return", cart);
        case 25:
          return _context5.abrupt("return", removeCartItemService(userId, bookId));
        case 26:
          _context5.next = 31;
          break;
        case 28:
          _context5.prev = 28;
          _context5.t0 = _context5["catch"](0);
          throw new Error('Error reducing book quantity in the cart');
        case 31:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 28]]);
  }));
  return function reduceQuantityService(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();
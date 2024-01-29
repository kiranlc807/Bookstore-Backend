"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeOrderService = exports.getOrderListService = exports.addOrderService = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _orderlist = _interopRequireDefault(require("../models/orderlist.model"));
var _cart = _interopRequireDefault(require("../models/cart.model"));
var _book = _interopRequireDefault(require("../models/book.model"));
var _address = _interopRequireDefault(require("../models/address.model"));
// // order.service.js
// import Order from '../models/order.model';
// import Cart from '../models/cart.model';
// import Address from '../models/address.model';
// import Book from '../models/book.model';

// export const addOrderService = async (userId) => {
//   try {
//     // Find the user's cart items
//     const cartItems = await Cart.findOne({ userId });

//     if (!cartItems) {
//       throw new Error('Cart is empty. Cannot create order.');
//     }

//     // Fetch the user's default address
//     const defaultAddress = await Address.findOne({ userId, isDefault: true });

//     if (!defaultAddress) {
//       throw new Error('User does not have a default address. Please provide an address.');
//     }

//     // Calculate the total for the order
//     const total = calculateOrderTotal(cartItems.books);

//     // Create orderData based on cart items
//     const orderData = {
//       items: await Promise.all(cartItems.books.map(async (cartItem) => {
//         const book = await Book.findById(cartItem.bookId);

//         if (!book) {
//           throw new Error(`Book with ID ${cartItem.bookId} not found.`);
//         }

//         return {
//           book_id: cartItem.bookId,
//           bookImage: book.image,
//           bookName: book.name,
//           price: book.discountPrice,
//           quantity: cartItem.quantity,
//         };
//       })),
//       total,
//       orderDate: new Date(),
//       address: {
//         address: defaultAddress.address,
//         city: defaultAddress.city,
//         state: defaultAddress.state,
//         type: defaultAddress.type,
//       },
//     };

//     // Create the order
//     const order = new Order({
//       user_id: userId,
//       orderData: [orderData],
//     });

//     // Save the order and remove cart items
//     await order.save();
//     await Cart.findOneAndDelete({ userId });

//     return order;
//   } catch (error) {
//     throw new Error(`Error creating order: ${error.message}`);
//   }
// };

// // Helper function to calculate the total for an order
// const calculateOrderTotal = (cartItems) => {
//   return cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.total, 0);
// };

// order.service.js
// order.service.js
// import Order from '../models/orderlist.model';
// import Cart from '../models/cart.model';
// import Book from '../models/book.model';
// import Address from '../models/address.model';

// export const addOrderService = async (userId, addressId) => {
//   try {
//     // Find the user's cart items
//     const cartItems = await Cart.findOne({ userId });

//     if (!cartItems || cartItems.books.length === 0) {
//       throw new Error('Cart is empty. Cannot create order.');
//     }
//     console.log("Id",addressId);
//     // Fetch the user's chosen address
//     const userAddresses = await Address.findOne({userId:userId});
//     console.log(userAddresses);
//     if (!chosenAddress) {
//       throw new Error('Chosen address not found. Please select a valid address.');
//     }
//     // Calculate the total for the order
//     // const total = calculateOrderTotal(cartItems.books);
//     const chosenAddress = addressId
//       ? userAddresses.addresses.find(address => address._id.equals(addressId))
//       : userAddresses.addresses[0];

//     console.log("Address-->",chosenAddress);
//     // Create orderData based on cart items
//     const orderData = {
//       items: await Promise.all(cartItems.books.map(async (cartItem) => {
//         const book = await Book.findById(cartItem.bookId);

//         if (!book) {
//           throw new Error(`Book with ID ${cartItem.bookId} not found.`);
//         }

//         return {
//           book_id: cartItem.bookId,
//           bookImage: book.bookImage,
//           bookName: book.bookName,
//           price: book.discountPrice,
//           quantity: cartItem.quantity,
//         };
//       })),
//       total:cartItems.totalPrice,
//       orderDate: new Date(),
//       address: [
//         {
//           address: chosenAddress.address,
//           city: chosenAddress.city,
//           state: chosenAddress.state,
//           type: chosenAddress.type,
//         },
//       ],
//     };

//     // Create the order
//     const order = new Order({
//       user_id: userId,
//       orderData: [orderData],
//     });

//     // Save the order and remove cart items
//     await order.save();
//     await Cart.findOneAndDelete({ userId });

//     return order;
//   } catch (error) {
//     throw new Error(`Error creating order: ${error.message}`);
//   }
// };

// order.service.js

var addOrderService = exports.addOrderService = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId, addressId) {
    var cartItems, userAddresses, chosenAddress, orderData, existingOrder, newOrder;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _cart["default"].findOne({
            userId: userId
          });
        case 3:
          cartItems = _context2.sent;
          if (!(!cartItems || cartItems.books.length === 0)) {
            _context2.next = 6;
            break;
          }
          throw new Error('Cart is empty. Cannot create order.');
        case 6:
          _context2.next = 8;
          return _address["default"].findOne({
            userId: userId
          });
        case 8:
          userAddresses = _context2.sent;
          if (!(!userAddresses || userAddresses.addresses.length === 0)) {
            _context2.next = 11;
            break;
          }
          throw new Error('User does not have any addresses.');
        case 11:
          // Find the chosen address by ID, or use the first address if ID is not provided
          chosenAddress = addressId ? userAddresses.addresses.find(function (address) {
            return address._id.equals(addressId);
          }) : userAddresses.addresses[0];
          if (chosenAddress) {
            _context2.next = 14;
            break;
          }
          throw new Error('Chosen address not found. Please select a valid address.');
        case 14:
          _context2.next = 16;
          return Promise.all(cartItems.books.map( /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(cartItem) {
              var book;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _book["default"].findById(cartItem.bookId);
                  case 2:
                    book = _context.sent;
                    if (book) {
                      _context.next = 5;
                      break;
                    }
                    throw new Error("Book with ID ".concat(cartItem.bookId, " not found."));
                  case 5:
                    console.log(book);
                    return _context.abrupt("return", {
                      book_id: cartItem.bookId,
                      bookImage: book.bookImage,
                      bookName: book.bookName,
                      price: book.discountPrice,
                      quantity: cartItem.quantity
                    });
                  case 7:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x3) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 16:
          _context2.t0 = _context2.sent;
          _context2.t1 = cartItems.totalPrice;
          _context2.t2 = new Date();
          _context2.t3 = [{
            address: chosenAddress.address,
            city: chosenAddress.city,
            state: chosenAddress.state,
            type: chosenAddress.type
          }];
          orderData = {
            items: _context2.t0,
            total: _context2.t1,
            orderDate: _context2.t2,
            address: _context2.t3
          };
          _context2.next = 23;
          return _orderlist["default"].findOne({
            user_id: userId
          });
        case 23:
          existingOrder = _context2.sent;
          if (!existingOrder) {
            _context2.next = 29;
            break;
          }
          // If the user already has an order, update the existing order's orderData
          existingOrder.orderData.push(orderData);
          existingOrder.save();
          _context2.next = 32;
          break;
        case 29:
          // If the user does not have an order, create a new order
          newOrder = new _orderlist["default"]({
            user_id: userId,
            orderData: [orderData]
          });
          _context2.next = 32;
          return newOrder.save();
        case 32:
          _context2.next = 34;
          return _cart["default"].findOneAndDelete({
            userId: userId
          });
        case 34:
          return _context2.abrupt("return");
        case 37:
          _context2.prev = 37;
          _context2.t4 = _context2["catch"](0);
          throw new Error("Error creating order: ".concat(_context2.t4.message));
        case 40:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 37]]);
  }));
  return function addOrderService(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getOrderListService = exports.getOrderListService = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userId) {
    var orders;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _orderlist["default"].find({
            user_id: userId
          });
        case 3:
          orders = _context3.sent;
          return _context3.abrupt("return", orders || []);
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          throw new Error('Error fetching order list');
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function getOrderListService(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var removeOrderService = exports.removeOrderService = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(userId, orderId) {
    var order;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _orderlist["default"].findOne({
            user_id: userId,
            'orderData._id': orderId
          });
        case 3:
          order = _context4.sent;
          if (order) {
            _context4.next = 6;
            break;
          }
          throw new Error('Order not found');
        case 6:
          // Remove the order by filtering out the specified orderId
          order.orderData = order.orderData.filter(function (item) {
            return item._id.toString() !== orderId;
          });

          // Save the updated order
          _context4.next = 9;
          return order.save();
        case 9:
          return _context4.abrupt("return", order.orderData);
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          throw new Error('Error removing order');
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function removeOrderService(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
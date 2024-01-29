"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeCartItem = exports.reduceQuantity = exports.getCartItems = exports.addToCart = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var CartService = _interopRequireWildcard(require("../services/cart.service"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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

var addToCart = exports.addToCart = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var cart;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return CartService.addToCartService(req.user.userId, req.params._id);
        case 3:
          cart = _context.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: cart.books,
            message: 'Book added to cart successfully'
          });
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(_httpStatusCodes["default"].BAD_REQUEST).json({
            code: _httpStatusCodes["default"].BAD_REQUEST,
            message: _context.t0.message
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function addToCart(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getCartItems = exports.getCartItems = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var cart;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return CartService.getCartItemsService(req.user.userId);
        case 3:
          cart = _context2.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: cart.books,
            message: 'Cart items retrieved successfully'
          });
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(_httpStatusCodes["default"].BAD_REQUEST).json({
            code: _httpStatusCodes["default"].BAD_REQUEST,
            message: 'Cart is empty'
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getCartItems(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var removeCartItem = exports.removeCartItem = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var cart;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return CartService.removeCartItemService(req.user.userId, req.params._id);
        case 3:
          cart = _context3.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: cart.books,
            message: 'Item removed from cart successfully'
          });
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(_httpStatusCodes["default"].BAD_REQUEST).json({
            code: _httpStatusCodes["default"].BAD_REQUEST,
            message: _context3.t0.message
          });
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function removeCartItem(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var reduceQuantity = exports.reduceQuantity = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var cart;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return CartService.reduceQuantityService(req.user.userId, req.params._id);
        case 3:
          cart = _context4.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: cart.books,
            message: 'Book quantity reduced in the cart successfully'
          });
          _context4.next = 10;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(_httpStatusCodes["default"].BAD_REQUEST).json({
            code: _httpStatusCodes["default"].BAD_REQUEST,
            message: _context4.t0.message
          });
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function reduceQuantity(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
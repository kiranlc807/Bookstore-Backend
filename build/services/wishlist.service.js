"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeWishlistItemService = exports.getWishlistItemsService = exports.addToWishlistService = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _wishlist = _interopRequireDefault(require("../models/wishlist.model"));
var _book = _interopRequireDefault(require("../models/book.model"));
// wishlist.service.js

var findOrCreateWishlist = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId) {
    var wishlist;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _wishlist["default"].findOne({
            userId: userId
          });
        case 2:
          wishlist = _context.sent;
          if (wishlist) {
            _context.next = 7;
            break;
          }
          wishlist = new _wishlist["default"]({
            userId: userId,
            books: []
          });
          _context.next = 7;
          return wishlist.save();
        case 7:
          return _context.abrupt("return", wishlist);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function findOrCreateWishlist(_x) {
    return _ref.apply(this, arguments);
  };
}();
var addToWishlistService = exports.addToWishlistService = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId, bookId) {
    var wishlist, existingWishlistItem, book;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return findOrCreateWishlist(userId);
        case 3:
          wishlist = _context2.sent;
          existingWishlistItem = wishlist.books.find(function (item) {
            return item.bookId.equals(bookId);
          });
          _context2.next = 7;
          return _book["default"].findById(bookId);
        case 7:
          book = _context2.sent;
          if (book) {
            _context2.next = 10;
            break;
          }
          throw new Error('Book not found');
        case 10:
          if (!existingWishlistItem) {
            _context2.next = 14;
            break;
          }
          throw new Error('Book already exists in the wishlist');
        case 14:
          wishlist.books.push({
            bookId: bookId
          });
        case 15:
          _context2.next = 17;
          return wishlist.save();
        case 17:
          return _context2.abrupt("return", wishlist);
        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](0);
          throw new Error(_context2.t0.message);
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 20]]);
  }));
  return function addToWishlistService(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var getWishlistItemsService = exports.getWishlistItemsService = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userId) {
    var wishlist;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return findOrCreateWishlist(userId);
        case 3:
          wishlist = _context3.sent;
          return _context3.abrupt("return", wishlist);
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          throw new Error('Error fetching wishlist items');
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function getWishlistItemsService(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var removeWishlistItemService = exports.removeWishlistItemService = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(userId, bookId) {
    var wishlist, wishlistItemIndex;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return findOrCreateWishlist(userId);
        case 3:
          wishlist = _context4.sent;
          wishlistItemIndex = wishlist.books.findIndex(function (item) {
            return item.bookId.equals(bookId);
          });
          if (!(wishlistItemIndex === -1)) {
            _context4.next = 7;
            break;
          }
          throw new Error('Wishlist item not found');
        case 7:
          wishlist.books.splice(wishlistItemIndex, 1);
          _context4.next = 10;
          return wishlist.save();
        case 10:
          return _context4.abrupt("return", wishlist);
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          throw new Error('Error removing from wishlist');
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return function removeWishlistItemService(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
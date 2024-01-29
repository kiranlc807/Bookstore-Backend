"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortByPrice = exports.getSearchBooks = exports.getAllBooks = exports.GetBookByID = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _base = require("@hapi/joi/lib/base");
var _book = _interopRequireDefault(require("../models/book.model"));
var getAllBooks = exports.getAllBooks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var books;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _book["default"].find({});
        case 2:
          books = _context.sent;
          if (!(books.length == 0)) {
            _context.next = 7;
            break;
          }
          throw new Error("No Books Found");
        case 7:
          return _context.abrupt("return", books);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllBooks() {
    return _ref.apply(this, arguments);
  };
}();
var GetBookByID = exports.GetBookByID = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(bookId) {
    var book;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _book["default"].findById(bookId);
        case 2:
          book = _context2.sent;
          if (book) {
            _context2.next = 7;
            break;
          }
          throw new Error("Book Not Found");
        case 7:
          return _context2.abrupt("return", book);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function GetBookByID(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var sortByPrice = exports.sortByPrice = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(sortBy) {
    var books;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _book["default"].find({});
        case 2:
          books = _context3.sent;
          if (sortBy == 'low') {
            books.sort(function (x, y) {
              return x.discountPrice - y.discountPrice;
            });
          } else if (sortBy == 'high') {
            books.sort(function (x, y) {
              return y.discountPrice - x.discountPrice;
            });
          }
          return _context3.abrupt("return", books);
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function sortByPrice(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
var getSearchBooks = exports.getSearchBooks = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(searchItem) {
    var searchData;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _book["default"].find({
            bookName: {
              $regex: String(searchItem),
              $options: 'i'
            }
          });
        case 2:
          searchData = _context4.sent;
          if (searchData) {
            _context4.next = 7;
            break;
          }
          throw new Error('Book Not Found');
        case 7:
          return _context4.abrupt("return", searchData);
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getSearchBooks(_x3) {
    return _ref4.apply(this, arguments);
  };
}();
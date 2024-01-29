"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
// wishlist.model.js

var wishlistSchema = new _mongoose["default"].Schema({
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  books: [{
    bookId: {
      type: _mongoose["default"].Schema.Types.ObjectId,
      ref: 'Book',
      required: true
    }
  }]
});
var Wishlist = _mongoose["default"].model('Wishlist', wishlistSchema);
var _default = exports["default"] = Wishlist;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
// order.model.js

var orderItemSchema = new _mongoose.Schema({
  book_id: {
    type: String,
    required: true
  },
  bookImage: {
    type: String
  },
  bookName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});
var addressSchema = new _mongoose.Schema({
  fullname: {
    type: String
  },
  mobile: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  type: {
    type: String
  }
});
var orderSchema = new _mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  orderData: [{
    items: [orderItemSchema],
    total: {
      type: Number,
      "default": 0
    },
    orderDate: {
      type: Date
    },
    address: [addressSchema]
  }]
});
var _default = exports["default"] = (0, _mongoose.model)('Order', orderSchema);
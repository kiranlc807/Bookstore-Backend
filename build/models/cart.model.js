"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
// import { Schema, model } from "mongoose";

// const cartSchema = new Schema({
//     userId:{
//         type:Schema.Types.ObjectId,
//         ref : 'users',
//         require:true
//     },
//     bookId: { 
//         type: Schema.Types.ObjectId, 
//         ref: 'book',
//         required: true 
//     },
//     quantity: { 
//         type: Number,
//         default: 1 
//     },
//     total:{
//         type: Number,
//         default: 0
//     }
//     },
//     {
//         timestamps: true
//     }
// );

// export default model('Cart',cartSchema);

// cart.model.js

var cartSchema = new _mongoose["default"].Schema({
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
    },
    quantity: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  }],
  totalQuantity: {
    type: Number,
    "default": 0
  },
  totalPrice: {
    type: Number,
    "default": 0
  },
  isParchese: {
    type: Boolean,
    "default": false
  }
});
var Cart = _mongoose["default"].model('Cart', cartSchema);
var _default = exports["default"] = Cart;
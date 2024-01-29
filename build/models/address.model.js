"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
// address.model.js

var addressSchema = new _mongoose["default"].Schema({
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  addresses: [{
    fullname: {
      type: String
    },
    mobile: {
      type: Number
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
  }]
});
var Address = _mongoose["default"].model('Address', addressSchema);
var _default = exports["default"] = Address;
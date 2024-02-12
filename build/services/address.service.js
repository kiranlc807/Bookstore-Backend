"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDefaultAddress = exports.removeAddressService = exports.getAddressListService = exports.addAddressService = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _address = _interopRequireDefault(require("../models/address.model"));
// address.service.js

var addAddressService = exports.addAddressService = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId, addressData) {
    var address, newAddress;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _address["default"].findOne({
            userId: userId
          });
        case 3:
          address = _context.sent;
          if (address) {
            _context.next = 11;
            break;
          }
          // If no existing address, create a new one
          newAddress = new _address["default"]({
            userId: userId,
            addresses: [addressData]
          });
          _context.next = 8;
          return newAddress.save();
        case 8:
          return _context.abrupt("return", newAddress);
        case 11:
          // If user already has addresses, add the new address to the array
          address.addresses.push(addressData);
          _context.next = 14;
          return address.save();
        case 14:
          return _context.abrupt("return", address);
        case 15:
          _context.next = 20;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          throw new Error('Error adding address');
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 17]]);
  }));
  return function addAddressService(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getAddressListService = exports.getAddressListService = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId) {
    var address;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _address["default"].findOne({
            userId: userId
          });
        case 3:
          address = _context2.sent;
          return _context2.abrupt("return", address ? address.addresses : []);
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          throw new Error('Error fetching address list');
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getAddressListService(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var removeAddressService = exports.removeAddressService = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userId, addressIndex) {
    var address;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _address["default"].findOne({
            userId: userId
          });
        case 3:
          address = _context3.sent;
          if (!(!address || !address.addresses || address.addresses.length === 0)) {
            _context3.next = 6;
            break;
          }
          throw new Error('Address not found');
        case 6:
          // Remove the address at the specified index
          address.addresses.splice(addressIndex, 1);
          _context3.next = 9;
          return address.save();
        case 9:
          return _context3.abrupt("return", address.addresses);
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          throw new Error('Error removing address');
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function removeAddressService(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
var updateDefaultAddress = exports.updateDefaultAddress = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(userId, addressId) {
    var addresses, addressIndex, newDefaultAddress, previousDefaultAddress;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _address["default"].findOne({
            userId: userId
          });
        case 3:
          addresses = _context4.sent;
          if (addresses) {
            _context4.next = 6;
            break;
          }
          throw new Error('Addresses not found');
        case 6:
          addressIndex = addresses.addresses.findIndex(function (address) {
            return address._id.equals(addressId);
          });
          if (!(addressIndex === -1)) {
            _context4.next = 9;
            break;
          }
          throw new Error('Address not found');
        case 9:
          newDefaultAddress = addresses.addresses[addressIndex];
          if (!(newDefaultAddress["default"] === true)) {
            _context4.next = 12;
            break;
          }
          return _context4.abrupt("return");
        case 12:
          // Update new default address
          newDefaultAddress["default"] = true;

          // Find and update the previous default address, if any
          previousDefaultAddress = addresses.addresses.find(function (address) {
            return address["default"] === true && !address._id.equals(addressId);
          });
          if (previousDefaultAddress) {
            previousDefaultAddress["default"] = false;
          }
          _context4.next = 17;
          return addresses.save();
        case 17:
          _context4.next = 22;
          break;
        case 19:
          _context4.prev = 19;
          _context4.t0 = _context4["catch"](0);
          throw _context4.t0;
        case 22:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 19]]);
  }));
  return function updateDefaultAddress(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
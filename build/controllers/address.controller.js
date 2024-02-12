"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDefaultAddress = exports.removeAddress = exports.getAddressList = exports.addAddress = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var AddressService = _interopRequireWildcard(require("../services/address.service"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// address.controller.js

var addAddress = exports.addAddress = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var address;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return AddressService.addAddressService(req.user.userId, req.body);
        case 3:
          address = _context.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: address,
            message: 'Address added successfully'
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
  return function addAddress(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getAddressList = exports.getAddressList = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var addresses;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return AddressService.getAddressListService(req.user.userId);
        case 3:
          addresses = _context2.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: addresses,
            message: 'Address list retrieved successfully'
          });
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(_httpStatusCodes["default"].BAD_REQUEST).json({
            code: _httpStatusCodes["default"].BAD_REQUEST,
            message: 'Error fetching address list'
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getAddressList(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var removeAddress = exports.removeAddress = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var addresses;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return AddressService.removeAddressService(req.user.userId, req.params.addressIndex);
        case 3:
          addresses = _context3.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: addresses,
            message: 'Address removed successfully'
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
  return function removeAddress(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// addressController.js

var setDefaultAddress = exports.setDefaultAddress = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return AddressService.updateDefaultAddress(req.user.userId, req.body.addressId);
        case 3:
          res.status(200).json({
            message: 'Default address updated successfully'
          });
          _context4.next = 9;
          break;
        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          res.status(400).json({
            error: _context4.t0.message
          });
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 6]]);
  }));
  return function setDefaultAddress(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
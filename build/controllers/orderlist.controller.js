"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeOrder = exports.getOrderList = exports.addOrder = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var OrderService = _interopRequireWildcard(require("../services/orderlist.service"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// order.controller.js

var addOrder = exports.addOrder = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var order;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return OrderService.addOrderService(req.user.userId, req.body.addressId);
        case 3:
          order = _context.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: order,
            message: 'Order Placed Successfully'
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
  return function addOrder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getOrderList = exports.getOrderList = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var orders;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return OrderService.getOrderListService(req.user.userId);
        case 3:
          orders = _context2.sent;
          // console.log(orders.orderData[0]);
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: orders,
            message: 'Order List Retrieved Successfully'
          });
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(_httpStatusCodes["default"].BAD_REQUEST).json({
            code: _httpStatusCodes["default"].BAD_REQUEST,
            message: _context2.t0.message
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getOrderList(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var removeOrder = exports.removeOrder = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var orderData;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return OrderService.removeOrderService(req.user.userId, req.params.orderId);
        case 3:
          orderData = _context3.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: orderData,
            message: 'Order Removed Successfully'
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
  return function removeOrder(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
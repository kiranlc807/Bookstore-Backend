"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newUser = exports.login = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var newUser = exports.newUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
    var userdata, saltRound, _newUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _user["default"].findOne({
            email: user.email
          });
        case 2:
          userdata = _context.sent;
          if (!userdata) {
            _context.next = 7;
            break;
          }
          throw new Error("User Already Exist");
        case 7:
          saltRound = 10;
          _context.next = 10;
          return _bcrypt["default"].hash(user.password, saltRound);
        case 10:
          user.password = _context.sent;
          _context.next = 13;
          return _user["default"].create(user);
        case 13:
          _newUser = _context.sent;
          return _context.abrupt("return", _newUser);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function newUser(_x) {
    return _ref.apply(this, arguments);
  };
}();
var login = exports.login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var user, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _user["default"].findOne({
            email: body.email
          });
        case 2:
          user = _context2.sent;
          if (user) {
            _context2.next = 5;
            break;
          }
          throw new Error("User Not Found!");
        case 5:
          _context2.next = 7;
          return _bcrypt["default"].compare(body.password, user.password);
        case 7:
          result = _context2.sent;
          if (result) {
            _context2.next = 12;
            break;
          }
          throw new Error("Incorrect Password");
        case 12:
          return _context2.abrupt("return", _jsonwebtoken["default"].sign({
            userId: user._id
          }, process.env.SECRET_KEY));
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function login(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
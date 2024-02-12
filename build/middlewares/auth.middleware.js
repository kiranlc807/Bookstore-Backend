"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAuth = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
var userAuth = exports.userAuth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var bearerToken;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          bearerToken = req.header('Authorization');
          console.log("Token", bearerToken);
          if (bearerToken) {
            _context.next = 5;
            break;
          }
          throw {
            code: _httpStatusCodes["default"].BAD_REQUEST,
            message: 'Authorization token is required'
          };
        case 5:
          bearerToken = bearerToken.split(' ')[1];
          req.user = _jsonwebtoken["default"].verify(bearerToken, process.env.SECRET_KEY);
          next();
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function userAuth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
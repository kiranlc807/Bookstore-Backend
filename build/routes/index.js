"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _user = _interopRequireDefault(require("./user.route"));
var _book = _interopRequireDefault(require("./book.route"));
var _cart = _interopRequireDefault(require("./cart.route"));
var _wishlist = _interopRequireDefault(require("./wishlist.route"));
var _address = _interopRequireDefault(require("./address.route"));
var _orderlist = _interopRequireDefault(require("./orderlist.route"));
var router = _express["default"].Router();
var routes = function routes() {
  router.get('/', function (req, res) {
    res.json('Welcome');
  });
  router.use('/users', _user["default"]);
  router.use('/books', _book["default"]);
  router.use('/cart', _cart["default"]);
  router.use('/wishlist', _wishlist["default"]);
  router.use('/address', _address["default"]);
  router.use('/orders', _orderlist["default"]);
  return router;
};
var _default = exports["default"] = routes;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("dotenv/config");
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _authRoutes = _interopRequireDefault(require("./routes/authRoutes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var path = require('path');
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"]["static"](path.join(__dirname, '../../dist')));
app.use(_bodyParser["default"].json());
app.use('/auth', _authRoutes["default"]);
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});
var _default = exports["default"] = app;
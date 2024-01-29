"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = _interopRequireDefault(require("../config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var verifyToken = function verifyToken(req, res, next) {
  var token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({
      message: 'token no proporcionado'
    });
  }
  try {
    var decoded = _jsonwebtoken["default"].verify(token, _config["default"].JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Token no valido'
    });
  }
};
var _default = exports["default"] = verifyToken;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _authControllers = require("../controllers/authControllers");
var _verifyToken = _interopRequireDefault(require("../middlewares/verifyToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/secure', _verifyToken["default"], function (req, res) {
  res.status(200).json({
    message: 'Ruta segura'
  });
});
router.post('/signup', _authControllers.signup);
router.get('/verify/:token', _authControllers.verifyEmail);
var _default = exports["default"] = router;
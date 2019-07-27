"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _contarpuesto = require("../controllers/contarpuesto.controller");

var router = (0, _express.Router)();
//    api/puesto/ensayo
router.get('/', _contarpuesto.getParaContar);
var _default = router;
exports["default"] = _default;
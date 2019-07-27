"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _puestoProducto = require("../controllers/puesto-producto.controller");

var router = (0, _express.Router)();
//    api/puesto-producto
router.post('/', _puestoProducto.createPuestoProducto); //    api/puesto-producto/:fk_id_puesto

router.get('/:fk_id_puesto', _puestoProducto.getProductosbyPuesto);
var _default = router;
exports["default"] = _default;
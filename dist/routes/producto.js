"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _producto = require("../controllers/producto.controller");

var router = (0, _express.Router)();
//    api/producto/
router.post('/', _producto.createProducto);
router.get('/', _producto.getProductos); //    api/producto/:id

router.get('/:id', _producto.getOneProducto);
router["delete"]('/:id', _producto.deleteProducto);
router.put('/:id', _producto.updateProducto);
var _default = router;
exports["default"] = _default;
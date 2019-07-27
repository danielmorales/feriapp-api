"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _puesto = require("../controllers/puesto.controller");

var router = (0, _express.Router)();
//    api/puesto/
router.post('/', _puesto.createPuesto);
router.get('/', _puesto.getPuestos); //    api/puesto/:id

router.get('/:id', _puesto.getOnePuesto);
router["delete"]('/:id', _puesto.deletePuesto);
router.put('/:id', _puesto.updatePuesto); //    api/puesto/feria/:fk_id_feria

router.get('/feria/:fk_id_feria', _puesto.getPuestosbyFeria);
var _default = router;
exports["default"] = _default;
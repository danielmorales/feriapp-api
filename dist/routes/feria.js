"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _feria = require("../controllers/feria.controller");

var router = (0, _express.Router)();
//    api/feria/
router.post('/', _feria.createFeria);
router.get('/', _feria.getFerias); //    api/feria/id

router.get('/:id', _feria.getOneFeria);
router["delete"]('/:id', _feria.deleteFeria);
router.put('/:id', _feria.updateFeria);
var _default = router;
exports["default"] = _default;
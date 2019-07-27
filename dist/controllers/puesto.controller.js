"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPuesto = createPuesto;
exports.getPuestos = getPuestos;
exports.getOnePuesto = getOnePuesto;
exports.deletePuesto = deletePuesto;
exports.updatePuesto = updatePuesto;
exports.getPuestosbyFeria = getPuestosbyFeria;

var _Puesto = _interopRequireDefault(require("../models/Puesto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createPuesto(_x, _x2) {
  return _createPuesto.apply(this, arguments);
}

function _createPuesto() {
  _createPuesto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre_puesto, descripcion_puesto, fk_id_feria, newPuesto;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //console.log(req.body);
            _req$body = req.body, nombre_puesto = _req$body.nombre_puesto, descripcion_puesto = _req$body.descripcion_puesto, fk_id_feria = _req$body.fk_id_feria;
            _context.prev = 1;
            _context.next = 4;
            return _Puesto["default"].create({
              nombre_puesto: nombre_puesto,
              descripcion_puesto: descripcion_puesto,
              fk_id_feria: fk_id_feria
            }, {
              fields: ['nombre_puesto', 'descripcion_puesto', 'fk_id_feria']
            });

          case 4:
            newPuesto = _context.sent;

            if (newPuesto) {
              res.json({
                message: 'Puesto creado',
                data: newPuesto
              });
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: 'No se pudo crear el puesto',
              data: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _createPuesto.apply(this, arguments);
}

function getPuestos(_x3, _x4) {
  return _getPuestos.apply(this, arguments);
}

function _getPuestos() {
  _getPuestos = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_req, res) {
    var puestos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Puesto["default"].findAll({
              attributes: ['id_puesto', 'nombre_puesto', 'descripcion_puesto', 'fk_id_feria'],
              order: [['id_puesto', 'DESC']]
            });

          case 3:
            puestos = _context2.sent;
            res.json({
              data: puestos
            });
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Algo anda mal, no se pudo obtener los puestos',
              data: {}
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getPuestos.apply(this, arguments);
}

function getOnePuesto(_x5, _x6) {
  return _getOnePuesto.apply(this, arguments);
}

function _getOnePuesto() {
  _getOnePuesto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, puesto;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log("Obtener un puesto");
            _context3.prev = 1;
            id = req.params.id;
            _context3.next = 5;
            return _Puesto["default"].findOne({
              where: {
                id_puesto: id
              },
              attributes: ['nombre_puesto', 'descripcion_puesto', 'fk_id_feria']
            });

          case 5:
            puesto = _context3.sent;
            res.json({
              data: puesto
            });
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'No se pudo obtener el puesto',
              data: {}
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _getOnePuesto.apply(this, arguments);
}

function deletePuesto(_x7, _x8) {
  return _deletePuesto.apply(this, arguments);
}

function _deletePuesto() {
  _deletePuesto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Puesto["default"].destroy({
              where: {
                id_puesto: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'Puesto deleted succesfully',
              count: deleteRowCount
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'No se pudo eliminar el Puesto',
              data: {}
            });

          case 12:
            ;

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _deletePuesto.apply(this, arguments);
}

function updatePuesto(_x9, _x10) {
  return _updatePuesto.apply(this, arguments);
}

function _updatePuesto() {
  _updatePuesto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nombre_puesto, descripcion_puesto, fk_id_feria, puestos;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, nombre_puesto = _req$body2.nombre_puesto, descripcion_puesto = _req$body2.descripcion_puesto, fk_id_feria = _req$body2.fk_id_feria;
            _context6.next = 5;
            return _Puesto["default"].findAll({
              attributes: ['id_puesto', 'nombre_puesto', 'descripcion_puesto', 'fk_id_feria'],
              where: {
                id_puesto: id
              }
            });

          case 5:
            puestos = _context6.sent;

            if (puestos.length > 0) {
              puestos.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(puestos) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return puestos.update({
                            nombre_puesto: nombre_puesto,
                            descripcion_puesto: descripcion_puesto,
                            fk_id_feria: fk_id_feria
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x13) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'Puesto updated succesfully',
              data: puestos
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.status(500).json({
              message: 'No se pudo actualizar el Puesto',
              data: {}
            });

          case 14:
            ;

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return _updatePuesto.apply(this, arguments);
}

function getPuestosbyFeria(_x11, _x12) {
  return _getPuestosbyFeria.apply(this, arguments);
}

function _getPuestosbyFeria() {
  _getPuestosbyFeria = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var fk_id_feria, puestos;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            fk_id_feria = req.params.fk_id_feria;
            _context7.prev = 1;
            _context7.next = 4;
            return _Puesto["default"].findAll({
              attributes: ['id_puesto', 'nombre_puesto', 'descripcion_puesto', 'fk_id_feria'],
              where: {
                fk_id_feria: fk_id_feria
              }
            });

          case 4:
            puestos = _context7.sent;
            res.json({
              puestos: puestos
            });
            _context7.next = 12;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 8]]);
  }));
  return _getPuestosbyFeria.apply(this, arguments);
}
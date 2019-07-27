"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFeria = createFeria;
exports.getFerias = getFerias;
exports.getOneFeria = getOneFeria;
exports.deleteFeria = deleteFeria;
exports.updateFeria = updateFeria;

var _Feria = _interopRequireDefault(require("../models/Feria"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createFeria(_x, _x2) {
  return _createFeria.apply(this, arguments);
}

function _createFeria() {
  _createFeria = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, geo_feria, nombre_feria, descripcion_feria, newFeria;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //console.log(req.body);
            _req$body = req.body, geo_feria = _req$body.geo_feria, nombre_feria = _req$body.nombre_feria, descripcion_feria = _req$body.descripcion_feria;
            _context.prev = 1;
            _context.next = 4;
            return _Feria["default"].create({
              geo_feria: geo_feria,
              nombre_feria: nombre_feria,
              descripcion_feria: descripcion_feria
            }, {
              fields: ['geo_feria', 'nombre_feria', 'descripcion_feria']
            });

          case 4:
            newFeria = _context.sent;

            if (newFeria) {
              res.json({
                message: 'Feria creada',
                data: newFeria
              });
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: 'No se pudo crear la feria',
              data: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _createFeria.apply(this, arguments);
}

function getFerias(_x3, _x4) {
  return _getFerias.apply(this, arguments);
}

function _getFerias() {
  _getFerias = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_req, res) {
    var ferias;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Feria["default"].findAll({
              attributes: ['id_feria', 'geo_feria', 'nombre_feria', 'descripcion_feria'],
              order: [['id_feria', 'DESC']]
            });

          case 3:
            ferias = _context2.sent;
            res.json({
              data: ferias
            });
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'No se pudo obtener las ferias',
              data: {}
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getFerias.apply(this, arguments);
}

function getOneFeria(_x5, _x6) {
  return _getOneFeria.apply(this, arguments);
}

function _getOneFeria() {
  _getOneFeria = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, feria;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Feria["default"].findOne({
              where: {
                id_feria: id
              }
            });

          case 4:
            feria = _context3.sent;
            res.json({
              data: feria
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'No se pudo obtener la feria',
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getOneFeria.apply(this, arguments);
}

function deleteFeria(_x7, _x8) {
  return _deleteFeria.apply(this, arguments);
}

function _deleteFeria() {
  _deleteFeria = _asyncToGenerator(
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
            return _Feria["default"].destroy({
              where: {
                id_feria: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'Feria deleted succesfully',
              count: deleteRowCount
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'No se pudo eliminar la feria',
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
  return _deleteFeria.apply(this, arguments);
}

function updateFeria(_x9, _x10) {
  return _updateFeria.apply(this, arguments);
}

function _updateFeria() {
  _updateFeria = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, geo_feria, nombre_feria, descripcion_feria, ferias;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, geo_feria = _req$body2.geo_feria, nombre_feria = _req$body2.nombre_feria, descripcion_feria = _req$body2.descripcion_feria;
            _context6.next = 5;
            return _Feria["default"].findAll({
              attributes: ['id_feria', 'geo_feria', 'nombre_feria', 'descripcion_feria'],
              where: {
                id_feria: id
              }
            });

          case 5:
            ferias = _context6.sent;

            if (ferias.length > 0) {
              ferias.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(feria) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return feria.update({
                            geo_feria: geo_feria,
                            nombre_feria: nombre_feria,
                            descripcion_feria: descripcion_feria
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'Feria updated succesfully',
              data: ferias
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.status(500).json({
              message: 'No se pudo actualizar la feria',
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
  return _updateFeria.apply(this, arguments);
}
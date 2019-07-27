"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPuestoProducto = createPuestoProducto;
exports.getProductosbyPuesto = getProductosbyPuesto;
exports.deletePuestoProducto = deletePuestoProducto;

var _PuestoProducto = _interopRequireDefault(require("../models/PuestoProducto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createPuestoProducto(_x, _x2) {
  return _createPuestoProducto.apply(this, arguments);
}

function _createPuestoProducto() {
  _createPuestoProducto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, fk_id_puesto, fk_id_producto, newPuestoProducto;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //console.log(req.body);
            _req$body = req.body, fk_id_puesto = _req$body.fk_id_puesto, fk_id_producto = _req$body.fk_id_producto;
            _context.prev = 1;
            _context.next = 4;
            return _PuestoProducto["default"].create({
              fk_id_puesto: fk_id_puesto,
              fk_id_producto: fk_id_producto
            }, {
              fields: ['fk_id_puesto', 'fk_id_producto']
            });

          case 4:
            newPuestoProducto = _context.sent;

            if (newPuestoProducto) {
              res.json({
                message: 'Producto agregado al puesto',
                data: newPuestoProducto
              });
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: 'No se pudo agregar el Prouducto al Puesto',
              data: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _createPuestoProducto.apply(this, arguments);
}

function getProductosbyPuesto(_x3, _x4) {
  return _getProductosbyPuesto.apply(this, arguments);
}

function _getProductosbyPuesto() {
  _getProductosbyPuesto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var fk_id_puesto, ProductosPuesto;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            fk_id_puesto = req.params.fk_id_puesto;
            _context2.prev = 1;
            _context2.next = 4;
            return _PuestoProducto["default"].findAll({
              attributes: ['fk_id_producto'],
              where: {
                fk_id_puesto: fk_id_puesto
              }
            });

          case 4:
            ProductosPuesto = _context2.sent;
            res.json({
              ProductosPuesto: ProductosPuesto
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getProductosbyPuesto.apply(this, arguments);
}

function deletePuestoProducto(_x5, _x6) {
  return _deletePuestoProducto.apply(this, arguments);
}

function _deletePuestoProducto() {
  _deletePuestoProducto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _PuestoProducto["default"].destroy({
              where: {
                id_puesto: id
              }
            });

          case 4:
            deleteRowCount = _context3.sent;
            res.json({
              message: 'Puesto deleted succesfully',
              count: deleteRowCount
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'No se pudo eliminar el Puesto',
              data: {}
            });

          case 12:
            ;

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _deletePuestoProducto.apply(this, arguments);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProducto = createProducto;
exports.getProductos = getProductos;
exports.getOneProducto = getOneProducto;
exports.deleteProducto = deleteProducto;
exports.updateProducto = updateProducto;

var _Producto = _interopRequireDefault(require("../models/Producto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createProducto(_x, _x2) {
  return _createProducto.apply(this, arguments);
}

function _createProducto() {
  _createProducto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre_producto, descripcion_producto, newProducto;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //console.log(req.body);
            _req$body = req.body, nombre_producto = _req$body.nombre_producto, descripcion_producto = _req$body.descripcion_producto;
            _context.prev = 1;
            _context.next = 4;
            return _Producto["default"].create({
              nombre_producto: nombre_producto,
              descripcion_producto: descripcion_producto
            }, {
              fields: ['nombre_producto', 'descripcion_producto']
            });

          case 4:
            newProducto = _context.sent;

            if (newProducto) {
              res.json({
                message: 'Producto creado',
                data: newProducto
              });
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: 'No se pudo crear el producto',
              data: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _createProducto.apply(this, arguments);
}

function getProductos(_x3, _x4) {
  return _getProductos.apply(this, arguments);
}

function _getProductos() {
  _getProductos = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_req, res) {
    var productos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Producto["default"].findAll({
              attributes: ['id_producto', 'nombre_producto', 'descripcion_producto'],
              order: [['nombre_producto', 'ASC']]
            });

          case 3:
            productos = _context2.sent;
            res.json({
              data: productos
            });
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Algo anda mal',
              data: {}
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getProductos.apply(this, arguments);
}

function getOneProducto(_x5, _x6) {
  return _getOneProducto.apply(this, arguments);
}

function _getOneProducto() {
  _getOneProducto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, producto;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Producto["default"].findOne({
              where: {
                id_producto: id
              }
            });

          case 4:
            producto = _context3.sent;
            res.json({
              data: producto
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'Algo anda mal',
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getOneProducto.apply(this, arguments);
}

function deleteProducto(_x7, _x8) {
  return _deleteProducto.apply(this, arguments);
}

function _deleteProducto() {
  _deleteProducto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log('mensaje');
            _context4.prev = 1;
            id = req.params.id;
            _context4.next = 5;
            return _Producto["default"].destroy({
              where: {
                id_producto: id
              }
            });

          case 5:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'Producto deleted succesfully',
              count: deleteRowCount
            });
            _context4.next = 13;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'No se pudo eliminar el producto',
              data: {}
            });

          case 13:
            ;

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 9]]);
  }));
  return _deleteProducto.apply(this, arguments);
}

function updateProducto(_x9, _x10) {
  return _updateProducto.apply(this, arguments);
}

function _updateProducto() {
  _updateProducto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nombre_producto, descripcion_producto, productos;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, nombre_producto = _req$body2.nombre_producto, descripcion_producto = _req$body2.descripcion_producto;
            _context6.next = 5;
            return _Producto["default"].findAll({
              attributes: ['id_producto', 'nombre_producto', 'descripcion_producto'],
              where: {
                id_producto: id
              }
            });

          case 5:
            productos = _context6.sent;

            if (productos.length > 0) {
              productos.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(producto) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return producto.update({
                            nombre_producto: nombre_producto,
                            descripcion_producto: descripcion_producto
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
              message: 'Producto updated succesfully',
              data: productos
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.status(500).json({
              message: 'No se pudo actualizar el producto',
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
  return _updateProducto.apply(this, arguments);
}
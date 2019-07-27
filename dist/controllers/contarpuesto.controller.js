"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParaContar = getParaContar;

var _Puesto = _interopRequireDefault(require("../models/Puesto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Funcion de prueba
function getParaContar(_x, _x2) {
  return _getParaContar.apply(this, arguments);
}

function _getParaContar() {
  _getParaContar = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_req, res) {
    var puestos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log("PRUEBA");
            _context.next = 4;
            return _Puesto["default"].findAll({
              attributes: [[sequelize.fn('COUNT', sequelize.col('id_puesto')), 3]]
            });

          case 4:
            puestos = _context.sent;
            console.log(puestos);
            /* res.json({
                 puestos
             });*/

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: 'Algo anda mal, no se pudo obtener los puestos',
              data: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getParaContar.apply(this, arguments);
}
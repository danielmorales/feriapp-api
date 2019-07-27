"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Producto = _interopRequireDefault(require("./Producto"));

var _Puesto = _interopRequireDefault(require("./Puesto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PuestoProducto = _database.sequelize.define('puestoproducto', {
  id_puesto_producto: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  fk_id_puesto: {
    type: _sequelize["default"].INTEGER
  },
  fk_id_producto: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true
});

_Producto["default"].belongsToMany(_Puesto["default"], {
  // as: [Relationship],
  through: PuestoProducto,
  //this can be string or a model,
  foreignKey: 'fk_id_puesto'
});

_Puesto["default"].belongsToMany(_Producto["default"], {
  //  as: [Relationship2],
  through: PuestoProducto,
  foreignKey: 'fk_id_producto'
});

var _default = PuestoProducto;
exports["default"] = _default;
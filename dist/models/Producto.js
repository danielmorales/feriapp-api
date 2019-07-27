"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Producto = _database.sequelize.define('producto', {
  id_producto: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre_producto: {
    type: _sequelize["default"].TEXT
  },
  descripcion_producto: {
    type: _sequelize["default"].TEXT
    /*,
        foto_producto:{
            type: Sequelize.BLOB('tiny')
        }*/

  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Producto;
exports["default"] = _default;
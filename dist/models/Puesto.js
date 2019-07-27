"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Puesto = _database.sequelize.define('puesto', {
  id_puesto: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre_puesto: {
    type: _sequelize["default"].TEXT
  },
  descripcion_puesto: {
    type: _sequelize["default"].TEXT
  },
  fk_id_feria: {
    type: _sequelize["default"].INTEGER
    /*codigoqr_puesto:{
        type: Sequelize.BLOB('tiny')
    },
    geo_puesto:{
        type: Sequelize.GEOMETRY('POINT')
    },
    foto_producto:{
        type: Sequelize.BLOB('tiny')
    }*/

  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Puesto;
exports["default"] = _default;
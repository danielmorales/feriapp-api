"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Puesto = _interopRequireDefault(require("./Puesto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Feria = _database.sequelize.define('feria', {
  id_feria: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  geo_feria: {
    type: _sequelize["default"].TEXT
  },
  nombre_feria: {
    type: _sequelize["default"].TEXT
  },
  descripcion_feria: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

Feria.hasMany(_Puesto["default"], {
  foreingKey: 'fk_id_feria',
  sourceKey: 'id_feria'
});

_Puesto["default"].belongsTo(Feria, {
  foreingKey: 'fk_id_feria',
  sourceKey: 'id_feria'
});

var _default = Feria;
exports["default"] = _default;
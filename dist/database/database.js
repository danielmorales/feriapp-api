"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"]('test', 'postgres', 'postgres', {
  //omitNull: true,
  host: 'localhost',
  dialect: 'postgres',
  port: 5454,
  pool: {
    max: 5,
    min: 0,
    aquire: 30000,
    idle: 10000
  },
  //Para mostrar información por consola
  logging: false
});
exports.sequelize = sequelize;
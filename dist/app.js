"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _productos = _interopRequireDefault(require(".routes/productos"));

var _locales = _interopRequireDefault(require(".routes/locales"));

var _localProducto = _interopRequireDefault(require(".routes/local-producto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Importing router
//initialization
var app = (0, _express["default"])(); //Middlewares

app.use((0, _morgan["default"])('dev'));
app.use(json()); //routes

app.use('/api/productos', _productos["default"]);
app.use('/api/locales', _locales["default"]);
app.use('/api/local-producto', _localProducto["default"]);
var _default = app;
exports["default"] = _default;
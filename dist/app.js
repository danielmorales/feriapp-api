"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _producto = _interopRequireDefault(require("./routes/producto"));

var _puesto = _interopRequireDefault(require("./routes/puesto"));

var _puesto_producto = _interopRequireDefault(require("./routes/puesto_producto"));

var _feria = _interopRequireDefault(require("./routes/feria"));

var _contarpuesto = _interopRequireDefault(require("./routes/contarpuesto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

//Importing router
//initialization
var app = (0, _express["default"])(); //Middlewares

app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)()); //CORS Error prueba

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}); //routes

app.use('/api/producto', _producto["default"]);
app.use('/api/puesto', _puesto["default"]);
app.use('/api/puesto-producto', _puesto_producto["default"]);
app.use('/api/feria', _feria["default"]); //routes de prueba

app.use('/api/contar', _contarpuesto["default"]);
var _default = app;
exports["default"] = _default;
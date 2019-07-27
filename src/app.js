import express, {json} from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

//Importing router
import productosRoutes from './routes/producto';
import puestosRoutes from './routes/puesto';
import puestoProductoRoutes from './routes/puesto_producto';
import feriaRoutes from './routes/feria';
import contarpuestoRoutes from './routes/contarpuesto';
import cuentaRoutes from './routes/cuenta';

//initialization
const app = express();

//Middlewares
// Para mostrar por consola lo que va llegando
app.use(morgan('dev'));
// Body parser
app.use(bodyParser.urlencoded({extended: true}));
// Para entender el formato JSON que llega a través de una aplicación
app.use(bodyParser.json());


//CORS Error prueba
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//routes
app.use('/api/producto', productosRoutes);
app.use('/api/puesto', puestosRoutes);
app.use('/api/puesto-producto', puestoProductoRoutes);
app.use('/api/feria', feriaRoutes);
app.use('/api/cuenta', cuentaRoutes);


//routes de prueba
app.use('/api/contar', contarpuestoRoutes);

export default app;
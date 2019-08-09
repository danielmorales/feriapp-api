import express, {json} from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const config = require('./config/config');

//Importing router
import productosRoutes from './routes/producto';
import puestosRoutes from './routes/puesto';
import puestoProductoRoutes from './routes/puesto_producto';
import feriaRoutes from './routes/feria';
import contarpuestoRoutes from './routes/contarpuesto';
import cuentaRoutes from './routes/cuenta';

// Prueba para sincronizar la base de datos y crear tablas a través de los modelos
 import {db} from './database/database'
 db.sync().then(()=> console.log('DB CONECTADA')).catch((error)=> console.log(error));

//initialization
const app = express();

// Middlewares
// Token
// app.set('superSecret', config.secret);    // no lo ocupo aca
// Body parser
app.use(bodyParser.urlencoded({extended: true}));
// Para entender el formato JSON que llega a través de una aplicación
app.use(bodyParser.json());
// Para mostrar por consola lo que va llegando
app.use(morgan('dev'));



//CORS Error prueba
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//routes
app.use('/api/cuenta', cuentaRoutes);
// Middleware de autenticación con token
/*
app.use(function(req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-token'];
    if(token){
        jwt.verify(token, req.app.get('superSecret'), (err,decoded) => {
            if(err){
                return res.json({
                    success: false,
                    message: 'Autenticación fallida'
                });
            }
            else{
                req.decoded = decoded,
                console.log('EL DECODED QUE INGRESO EN EL MIDDLEWARE', req.decoded);
                next();
            }
        });
    }
    else{
        return res.status(403).send({
            success: false,
            message: 'No se ha autenticado, no existe el token'
        });
    }
});
*/

app.use('/api/producto', productosRoutes);
app.use('/api/puesto', puestosRoutes);
app.use('/api/puesto-producto', puestoProductoRoutes);
app.use('/api/feria', feriaRoutes);



//routes de prueba
app.use('/api/contar', contarpuestoRoutes);

export default app;
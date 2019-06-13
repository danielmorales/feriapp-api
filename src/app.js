import express, {json} from 'express';
import morgan from 'morgan';

//Importing router
import productosRoutes from './routes/producto';
import puestosRoutes from './routes/puesto';
import puestoProductoRoutes from './routes/puesto_producto';
import feriaRoutes from './routes/feria';
import contarpuestoRoutes from './routes/contarpuesto';

//initialization
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/producto', productosRoutes);
app.use('/api/puesto', puestosRoutes);
app.use('/api/puesto-producto', puestoProductoRoutes);
app.use('/api/feria', feriaRoutes);

//routes de prueba
app.use('/api/contar', contarpuestoRoutes);

export default app;
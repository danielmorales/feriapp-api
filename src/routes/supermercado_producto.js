import { Router } from 'express';
const router = Router();

import { createSupermercadoProducto, deleteSupermercadoProducto, getProductosbySupermercado} from '../controllers/supermercado-producto.controller';

//    api/supermercado-producto
router.post('/', createSupermercadoProducto);
router.delete('/', deleteSupermercadoProducto);
router.get('/', getProductosbySupermercado);

export default router;

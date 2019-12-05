import { Router } from 'express';
const router = Router();

import {createOfertaProducto, getOfertasbyPuesto, deleteOfertaProducto} from '../controllers/oferta-producto.controller';

//    api/oferta-producto
router.post('/', createOfertaProducto);
router.get('/', getOfertasbyPuesto);
router.delete('/', deleteOfertaProducto);

export default router;
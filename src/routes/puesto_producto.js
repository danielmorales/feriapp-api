import { Router } from 'express';
const router = Router();

import {createPuestoProducto, getProductosbyPuesto, deletePuestoProducto} from '../controllers/puesto-producto.controller';

//    api/puesto-producto
router.post('/', createPuestoProducto);

//    api/puesto-producto/:fk_id_puesto
router.get('/:fk_id_puesto', getProductosbyPuesto);

//    api/puesto-producto/:id
router.delete('/:id', deletePuestoProducto);

export default router;
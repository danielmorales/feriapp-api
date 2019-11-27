import { Router } from 'express';
const router = Router();

import { createDetalleListaCompras, getDetalleListaComprasbyListaCompra, deleteDetalleListaCompras } from '../controllers/detallelistacompras.controller';

//  api/detallelistacompras/
router.post('/', createDetalleListaCompras);
router.get('/', getDetalleListaComprasbyListaCompra);
router.delete('/', deleteDetalleListaCompras);


export default router;
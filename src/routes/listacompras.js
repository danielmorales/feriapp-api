import { Router } from 'express';
const router = Router();

import { createListaCompras, getListasComprasbyCuenta, deleteListaCompras } from '../controllers/listacompras.controller';

//  api/listacompras/
router.post('/', createListaCompras);
router.get('/', getListasComprasbyCuenta);
router.delete('/', deleteListaCompras);


export default router;
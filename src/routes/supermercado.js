import { Router } from 'express';
const router = Router();

import { createSupermercado, getSupermercado, deleteSupermercado} from '../controllers/supermercado.controller';

//    api/supermercado/
router.post('/', createSupermercado);
router.get('/', getSupermercado);
router.delete('/', deleteSupermercado);

export default router;
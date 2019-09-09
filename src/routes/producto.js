import { Router } from 'express';
const router = Router();

import { createProducto, getProductos, getOneProducto, deleteProducto, updateProducto, updateFoto} from "../controllers/producto.controller";
import { verificaToken } from '../middlewares/autenticacion';

//    api/producto/
router.post('/', createProducto);
router.get('/', getProductos);

//    api/producto/:id
router.get('/:id', getOneProducto);
router.delete('/:id', deleteProducto);
router.put('/:id', updateProducto);

//    api/producto/upload
router.post('/upload', verificaToken, updateFoto);

export default router;
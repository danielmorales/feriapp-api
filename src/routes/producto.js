import { Router } from 'express';
const router = Router();

import { createProducto, getProductos, getOneProducto, deleteProducto, updateProducto, updateFoto, rutaFoto} from "../controllers/producto.controller";
import { verificaToken } from '../middlewares/autenticacion';

//    api/producto/
router.post('/', verificaToken, createProducto);
router.get('/', getProductos);

//    api/producto/:id
router.get('/:id', getOneProducto);
router.delete('/:id', deleteProducto);
router.put('/:id', updateProducto);

//    api/producto/upload
router.post('/upload', verificaToken, updateFoto);

//    api/producto/imagen/:id_producto/:img
router.get('/imagen/:id_producto/:img', rutaFoto);

export default router;
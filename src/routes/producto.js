import { Router } from 'express';
const router = Router();

import { createProducto, getProductos, getOneProducto, deleteProducto, updateProducto} from "../controllers/producto.controller";

//    api/producto/
router.post('/', createProducto);
router.get('/', getProductos);

//    api/producto/:id
router.get('/:id', getOneProducto);
router.delete('/:id', deleteProducto);
router.put('/:id', updateProducto);

export default router;
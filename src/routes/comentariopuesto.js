import { Router } from 'express';
const router = Router();

import {crearComentario, getComentariosbyPuesto} from '../controllers/comentariopuesto.controller';
import { verificaToken } from '../middlewares/autenticacion';

//    api/comentariopuesto/
router.post('/', verificaToken, crearComentario);

//    api/comentariopuesto/:fk_id_puesto
//    Obtener los comentarios sera un método publico
router.get('/', getComentariosbyPuesto);

export default router;


import { Router } from 'express';
const router = Router();

import {createPuesto, getPuestos, getOnePuesto, deletePuesto, updatePuesto, getPuestosbyFeria} from '../controllers/puesto.controller';

//    api/puesto/
router.post('/', createPuesto);
router.get('/', getPuestos);

//    api/puesto/:id
router.get('/:id', getOnePuesto);
router.delete('/:id', deletePuesto);
router.put('/:id', updatePuesto);

//    api/puesto/feria/:fk_id_feria
router.get('/feria/:fk_id_feria', getPuestosbyFeria);


export default router;
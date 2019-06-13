import { Router } from 'express';
const router = Router();

import {createFeria, getFerias, getOneFeria, deleteFeria, updateFeria, homepage} from '../controllers/feria.controller';


//    api/feria/
router.post('/', createFeria);
router.get('/', getFerias);

//    api/feria/id
router.get('/:id', getOneFeria);
router.delete('/:id', deleteFeria);
router.put('/:id', updateFeria);

export default router;
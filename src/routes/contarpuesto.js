import { Router } from 'express';
const router = Router();

import {getParaContar} from '../controllers/contarpuesto.controller';


//    api/puesto/ensayo
router.get('/', getParaContar);

export default router;
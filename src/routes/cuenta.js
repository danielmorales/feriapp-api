import { Router } from 'express';
const router = Router();

import {createCuenta, login, updateCuenta, getOneCuenta} from "../controllers/cuenta.controller";
import { verificaToken } from '../middlewares/autenticacion';

//    api/cuenta/
router.post('/', createCuenta);
router.post('/login',login);
router.post('/update', verificaToken, updateCuenta);

router.get('/', verificaToken, getOneCuenta);

export default router;
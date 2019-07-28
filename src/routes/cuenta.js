import { Router } from 'express';
const router = Router();

import {createCuenta, login} from "../controllers/cuenta.controller";

//    api/cuenta/
router.post('/', createCuenta);
router.post('/login',login);


export default router;
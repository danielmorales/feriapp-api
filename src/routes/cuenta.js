import { Router } from 'express';
const router = Router();

import {createCuenta} from "../controllers/cuenta.controller";

//    api/producto/
router.post('/', createCuenta);


export default router;
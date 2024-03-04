import { Router } from 'express'
import { 
   getActivos,
   getActivo,
   getCities,
   updateActivo,
   deleteActivo
} from '../controllers/sqlController.js';

const router = Router();

router.get('/activos', getActivos);
router.get('/activos/:id', getActivo);
router.get('/cities', getCities);

router.put('/activos/:id', updateActivo);
router.delete('/activos/:id', deleteActivo);


export default router;
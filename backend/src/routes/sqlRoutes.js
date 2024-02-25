import { Router } from 'express'
import { 
   getActivos,
   getActivo,
   createActivo,
   updateActivo,
   deleteActivo
} from '../controllers/sqlController.js';

const router = Router();

router.get('/activos', getActivos);
router.get('/activos/:id', getActivo);
router.post('/activos/:id', createActivo);
router.put('/activos/:id', updateActivo);
router.delete('/activos/:id', deleteActivo);


export default router;
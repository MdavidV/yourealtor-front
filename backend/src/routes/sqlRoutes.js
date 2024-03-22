import { Router } from 'express'
import { 
   getActivos,
   getActivo,
   getCities,
   updateActivo,
   deleteActivo,
   getTable,
   deleteField,
   createField
} from '../controllers/sqlController.js';

const router = Router();

router.get('/activos', getActivos);
router.get('/activos/:id', getActivo);
router.get('/cities', getCities);

router.put('/activos/:id', updateActivo);
router.delete('/activos/:id', deleteActivo);

router.get('/get-table', getTable);
router.delete('/delete-field/:tableName/:idField', deleteField);
router.post('/create-field', createField);



export default router;
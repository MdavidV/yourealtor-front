import { Router } from 'express'
import { 
   getActivos,
   getActivo,
   getCities,
   updateActivo,
   deleteActivo,
   getTable,
   deleteField,
   createField,
   createActivo
} from '../controllers/sqlController.js';
import { uploadPropertyFileToS3 } from '../middlewares/uploadFile.js';

const router = Router();

router.get('/activos', getActivos);
router.get('/activos/:id', getActivo);
router.get('/cities', getCities);

router.put('/activos/:id', updateActivo);
router.delete('/activos/:id', deleteActivo);

router.get('/get-table', getTable);
router.delete('/delete-field/:tableName/:idField', deleteField);
router.post('/create-field', createField);

router.post('/create-property', uploadPropertyFileToS3, createActivo );



export default router;
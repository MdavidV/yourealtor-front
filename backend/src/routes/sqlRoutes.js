import { Router } from 'express'
import { 
   getActivos,
   getActivo,
   updateActivo,
   deleteActivo,
   deleteField,
   createField,
   createActivo,
   getActivoByAdmin,
   getActivoById,
   loadData,
   createClient
} from '../controllers/sqlController.js';
import { uploadPropertyFileToS3 } from '../middlewares/uploadFile.js';

const router = Router();

router.get('/activos', getActivos);
router.get('/activos/:id', getActivo);
router.get('/activo-byId/:idActivo', getActivoById);
router.get('/get-activo-admin', getActivoByAdmin);
router.patch('/update-activo/:id', uploadPropertyFileToS3, updateActivo)

router.put('/activos/:id', updateActivo);
router.delete('/activos/:id', deleteActivo);

router.get('/get-tables', loadData);
router.delete('/delete-field/:tableName/:idField', deleteField);
router.post('/create-field', createField);


router.post('/create-property', uploadPropertyFileToS3, createActivo );
router.post('/create-client', createClient);


export default router;
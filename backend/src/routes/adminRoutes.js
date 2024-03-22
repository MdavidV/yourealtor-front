import { Router } from "express";
import { deleteAsesor, getAsesors, signupAsesor, updateAvailabilityAsesor } from "../controllers/adminController.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import {asesorSchema} from "../models/authSchema.js";



const router = Router();


router.get('/get-Asesors', getAsesors);
router.post("/create-asesor",  validateSchema(asesorSchema), signupAsesor);
router.delete('/delete-asesor/:id', deleteAsesor);
router.patch('/update-availability-asesor/:id', updateAvailabilityAsesor);




export default router;
import Router from "express";
import { sendEmailForm } from "../libs/sendEmail.js";


const router = Router();


router.post('/send-email', sendEmailForm)



export default router
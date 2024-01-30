
// import express from 'express';
// import { signup, verifyEmail, login } from '../controllers/authControllers';
// import verifyToken from '../middlewares/verifyToken';

// const router = express.Router();


// router.get('/secure', verifyToken, (req, res) => {
//   res.status(200).json({ message: 'Ruta segura' });
// });

// router.post('/signup', signup);
// router.post('login', login)
// router.get('/verify/:token', verifyEmail);

// export default router;

import Router from 'express';
import { signup, login, logout, profile } from '../controllers/authControllers';
import { verifyToken } from '../middlewares/verifyToken.js';
import { validateSchema } from '../middlewares/validatorMiddleware.js';
import { registerSchema, loginSchema } from '../models/authSchema.js';

const router = Router();

router.post('/signup', validateSchema(registerSchema), signup);

router.post('/login', validateSchema(loginSchema), login);

router.post('/logout', logout);

router.get('/profile', verifyToken, profile)

export default router;
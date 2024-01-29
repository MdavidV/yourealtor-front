
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
import { signup, login } from '../controllers/authControllers';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;
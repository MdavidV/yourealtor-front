import Router from "express";
import {
  signup,
  login,
  logout,
  profile,
  verifyToken,
  confirm,
  changePassword,
} from "../controllers/authControllers.js";
import { authRequired } from "../middlewares/verifyToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { registerSchema, loginSchema, newPasswordSchema } from "../models/authSchema.js";


const router = Router();
router.post("/signup", validateSchema(registerSchema), signup);
router.post("/login",  validateSchema(loginSchema), login);
router.post("/logout", logout);
router.post("/change-password", validateSchema(newPasswordSchema), changePassword);
router.get("/profile", authRequired, profile);

router.get('/confirm/:token', confirm);
router.get('/verify', verifyToken);




export default router;

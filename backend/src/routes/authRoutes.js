import Router from "express";
import {
  signup,
  login,
  logout,
  profile,
  verifyToken,
  confirm,
} from "../controllers/authControllers.js";
import { authRequired } from "../middlewares/verifyToken.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { registerSchema, loginSchema } from "../models/authSchema.js";
import { getActivos } from "../controllers/sqlController.js";

const router = Router();
router.post("/signup", validateSchema(registerSchema), signup);
router.post("/login",  login);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);

router.get('/confirm/:token', confirm);
router.get('/verify', verifyToken);

router.get('/activos', getActivos);

export default router;

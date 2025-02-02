import User from "../models/User.js";
import Asesor from "../models/asesorSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import {
  createAccesToken,
  createVerificationToken,
  verifyVerificationToken,
} from "../libs/jwt.js";
import { getTemplate, sendEmail } from "../libs/sendEmail.js";

export const signup = async (req, res) => {
  const { firstName, secondName, email, password } = req.body;

  console.log(firstName, secondName, email, password);

  try {
    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json({ message: ["The email is already in Use"] });
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      secondName,
      email,
      password: hashedPassword,
    });

    console.log(newUser);

    const userSaved = await newUser.save();
    const token = await createAccesToken({ id: userSaved._id });

    const verificationToken = await createVerificationToken(userSaved._id);
    const template = getTemplate(firstName, verificationToken);
    await sendEmail(email, "Confirma Tu email", template);
    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.firstName,
      email: userSaved.email,
    });
  } catch (error) {
    res.status(550).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });



    if (!userFound) return res.status(400).json({ messaage: "User Not found" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect Password" });

    if (userFound.status !== "VERIFIED")
      return res.status(400).json({ message: "El usuario no está verificado" });
    
    const token = await createAccesToken({ id: userFound._id });
    const userObject = userFound.toObject();
    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.firstName,
      secondname: userFound.secondName,
      email: userFound.email,
      role: userFound.role,
      created: userFound.createdAt,
      code: userObject.code
    });
  } catch (error) {
    res.status(550).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "Unauthorized" });
  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });

    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "Unauthorized" });
    const userObject = userFound.toObject();
    return res.json({
      id: userFound._id,
      username: userFound.firstName,
      email: userFound.email,
      role: userFound.role,
      code: userObject.code
    });
  });
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: "User not found" });
  const userObject = userFound.toObject();
  res.json({
    id: userFound._id,
    username: userFound.firstName,
    secondname: userFound.secondName,
    email: userFound.email,
    role: userFound.role,
    created: userFound.createdAt,
    code: userObject.code
  });
};

export const confirm = async (req, res) => {
  try {
    const { token } = req.params;
    console.log(token);

    const userId = await verifyVerificationToken(token);

    if (!userId) {
      return res.json({ message: "Token no proporcionado" });
    }

    const userFound = await User.findById(userId);

    if (!userFound) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    (userFound.status = "VERIFIED"), await userFound.save();
    console.log("User status changed to VERIFIED");
    res.json({ redirectUrl: `http://localhost:5173/` });
  } catch (error) {
    console.log("error al confirmar usuario", error);
  }
};

export const changePassword = async (req, res) => {
  try {
    const { id, currentPassword, newPassword } = req.body;
    const userFound = await User.findById(id);

    const oldIsMatch = await bcrypt.compare(newPassword, userFound.password);

    if (oldIsMatch) {
      return res.status(401).json({
        message: "La nueva contrasena NO puede ser igual a la anterior",
      });
    }

    if (userFound) {
      const isMatch = await bcrypt.compare(currentPassword, userFound.password);

      if (isMatch) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        userFound.password = hashedPassword;
        await userFound.save();
        res.json({ messaage: "Contrasena Actualizada con exito" });
      } else {
        return res
          .status(400)
          .json({ message: "Actual Contrasena Incorrecta" });
      }
    } else {
      return res.status(404).json({ message: "Usuario No encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

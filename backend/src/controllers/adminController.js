import User from "../models/User.js";
import Asesor from "../models/asesorSchema.js";
import bcrypt from "bcryptjs";
import { createAccesToken, createVerificationToken } from "../libs/jwt.js";
import { getTemplate, sendEmail } from "../libs/sendEmail.js";

export const getAsesors = async (req, res) => {
  try {
    const asesors = await User.find({ role: "Asesor" });
    res.status(200).json(asesors);
  } catch (error) {
    console.error("Error al traer asesores: ", error);
  }
};

export const signupAsesor = async (req, res) => {
  const { firstName, secondName, phone, availability, code, email, password } =
    req.body;

  console.log(
    firstName,
    secondName,
    phone,
    availability,
    code,
    email,
    password
  );

  try {
    const userFound = await Asesor.findOne({ code });
    if (userFound)
      return res.status(400).json({ message: ["Ese codigo ya esta en uso"] });
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Asesor({
      firstName,
      secondName,
      phone,
      availability,
      code,
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
      phone: userSaved.phone,
      availability: userSaved.availability,
      code: userSaved.code,
    });
  } catch (error) {
    res.status(550).json({ message: error.message });
  }
};

export const deleteAsesor = async (req, res) => {
  try {
    const { id } = req.params;

    const asesor = await Asesor.findByIdAndDelete(id);

    if (!asesor) {
      return res.status(404).json({ message: "Asesor no encontrado" });
    }

    res.status(200).json({ message: "Asesor eliminado con exito" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el asesor", error: error.message });
  }
};

export const updateAvailabilityAsesor = async (req, res) => {
  try {
    const { id } = req.params;
    const {availability} = req.body;

    console.log(req.body);

    const updatedAsesor = await Asesor.findByIdAndUpdate(
      id,
      { availability },
      { new: true }
    );

    if (!updatedAsesor) {
      return res.status(404).json({ message: "Asesor no encontrado" });
    }

    res.json(updatedAsesor);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar el asesor", error: error.message });
  }
};

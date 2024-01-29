// import bcrypt from 'bcryptjs';
// import jwt, { decode } from 'jsonwebtoken';
// import User from '../models/User';
// import sendEmail from '../libs/sendEmail';
// import config from '../config';

// export const signup = async (req, res) => {
//     try{
//         const {firstName, secondName, email, password } = req.body;

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const verificationToken = jwt.sign({email}, config.JWT_SECRET);

//         await User.create({ firstName, secondName, email, password: hashedPassword, verificationToken });

//         const verificationLink = `https://localhost:5173/auth/verify/${verificationToken}`;

//         const mailOptions = {
//             from: process.env.GMAIL_USER,
//             to: email,
//             subject: 'Verificacion por correo electronico',
//             text: `Por favor, haz clic en el siguiente enlace para verificar tu correo electronico: ${verificationLink}`,
//         };

//         await sendEmail(mailOptions);
//         res.status(200).send('Usuario registrado. Por favor verifica tu correo electronico');
//     } catch (error){
//         console.error('error en el registro: ', error);
//         res.status(500).send('error en el registro.')
//     }
// };

// export const verifyEmail = async(req, res) => {
//     try{
//         const { token } = req.params;
//         const decodedToken = jwt.verify(token, config.JWT_SECRET);

//         await User.findOneAndUpdate({ email: decodedToken.email }, { isVerified: true });


        
//         res.status(200).send('Correo electronico verificado correctamente');
//     } catch (error) {
//         console.error('Error en la verificacion', error);
//         res.status(500).send('Error en la verificacion');
//     }
// }

// export const login = async (req, res) => {

// }

import User from "../models/user";

export const signup  =  async (req, res) => {
    const {firstName, secondName, email, password } = req.body;

    console.log(firstName, secondName, email, password);

    try{
        
    const newUser = new User({
        firstName,
        secondName,
        email,
        password
    })

    console.log(newUser);

    const userSaved = await newUser.save();


res.json(userSaved);
    res.send('registrando');

    } catch (error){
        console.error('Error al registrar un usuario', error);
    }

}
export const login = async (req, res) => res.send("login");
// const nodemailer = require('nodemailer');

import { GMAIL_USER, GMAIL_PASSWORD } from "../config.js";

import nodemailer from "nodemailer";

const mail = {
  user: GMAIL_USER,
  pass: GMAIL_PASSWORD,
};

let transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  auth: {
    user: mail.user,
    pass: mail.pass,
  },
  tls: {
    rejectUnauthorized: false
  }
});

export const sendEmail = async (email, subject, html) => {
  try {
    await transporter.sendMail({
      from: mail.user,
      to: email,
      subject,
      text: "Hello!",
      html,
    });
  } catch (error) {
    console.log("Error sending email", error);
  }
};

export const getTemplate = (firstName, token) => {
  return `
    <head>
        <link rel="stylesheet" href="./style.css">
    </head>

    <div id="email___content">
        <h2>Hola ${firstName}! Te saludamos desde el equipo de Yourealtor.</h2>
        <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
        <a
        href="http://localhost:5173/confirm/${token}"
        target="_blank"
        >Confirmar Cuenta</a>
    </div>
    `;
};

export const sendEmailForm = async (req, res) => {
  const { userName, telefono, email, mensaje } = req.body;

  const contentHTML = `
    <h1>Informacion de Usuario</h1>
    <ul>
      <li> Nombre: ${userName} </li>
      <li> Telefono: ${telefono} </li>
      <li> Correo Electronico: ${email} </li>
    </ul>
    <p>Mensaje: ${mensaje} </p>
    `;


    const info = await transporter.sendMail({
      from: "Yourealtor",
      to: mail.user,
      subject: 'Formulario de Contacto desde la Pagina web',
      html: contentHTML
    })

    console.log('Message Sent', info.messageId);


    console.log(contentHTML);

    res.send('recived')
};

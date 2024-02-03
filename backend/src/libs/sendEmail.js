// const nodemailer = require('nodemailer');

import nodemailer from "nodemailer";

const mail = {
  user: "tech@yourealtor.co",
  pass: "You2024*",
};

let transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  auth: {
    user: mail.user,
    pass: mail.pass,
  },
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
        <img src="https://i.imgur.com/eboNR82.png" alt="">
        <h2>Hola ${firstName}</h2>
        <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
        <a
        href="http://localhost:5173/confirm/${token}"
        target="_blank"
        >Confirmar Cuenta</a>
    </div>
    `;
};

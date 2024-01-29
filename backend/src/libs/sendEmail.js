import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    servide: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    }
});

const sendEmail = async(mailOptions) => {
    try{
        await transporter.sendMail(mailOptions);
        console.log('Correo electronico enviado correctamente');
    } catch (error) {
        console.error('Error al enviar correo electronico', error);
    }
}

export default sendEmail;
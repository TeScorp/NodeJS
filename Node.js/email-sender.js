const nodemailer = require('nodemailer');

// Remplacer par les données personelles.
const senderEmail = 'samba.co93@gmail.com';
const senderPassword = 'zfwaslqxsddqenmz';
const recipientEmail = 'tsarr3110@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
});
// Précicion du message à envoyer
const mailOptions = {
  from: senderEmail,
  to: recipientEmail,
  subject: 'Test Email from Node.js',
  text: 'Bonjour,',
  html:"<p>Bonjour, ceci est un email test envoyé depuis Node.js via nodemailer.</p>"
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

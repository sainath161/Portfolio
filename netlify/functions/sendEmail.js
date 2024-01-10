// netlify/functions/sendEmail.js
const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  try {
    // Parse the form data
    const data = JSON.parse(event.body);

    // Your email sending logic using nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // Use Netlify environment variable for email
        pass: process.env.EMAIL_PASSWORD, // Use Netlify environment variable for email password or an app-specific password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: 'sainathsmart1234@gmail.com', // Replace with your recipient's email
      subject: data.subject,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

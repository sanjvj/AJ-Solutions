const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configure Nodemailer
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// API endpoint to handle form submissions
app.post('/send-email', (req, res) => {
  const { customerName, whatsappNumber, emailId, city, preferredService, shortNote } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'sanjaysurya3012.work@gmail.com',
    subject: 'A new Customer is reaching you out',
    text: `You have a new form submission requesting for service:
      Customer Name: ${customerName}
      Whatsapp Number: ${whatsappNumber}
      Email Id: ${emailId}
      City: ${city}
      Preferred Service: ${preferredService}
      Short Note: ${shortNote}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.post('/send-feedback', (req, res) => {
  const { customerName, whatsappNumber, emailId, feedback } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'sanjaysurya3012.work@gmail.com',
    subject: 'New Feedback',
    text: `You have a new feedback form submission:
      Customer Name: ${customerName}
      Whatsapp Number: ${whatsappNumber}
      Email Id: ${emailId}
      Feedback: ${feedback}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

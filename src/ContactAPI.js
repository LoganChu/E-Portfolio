const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  console.log(name,email,message);
  if (!name || !email || !message) {
    return res.status(400).send("All fields are required.");
  }

  console.log(process.env.GMAIL);
  console.log(process.env.GMAIL_PASSWORD);
  try {
    // Configure your email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or your email provider
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASSWORD, 
      },
    });

    console.log(transporter);

    // Compose the email
    const mailOptions = {
      from: email,
      to: process.env.GMAIL,
      subject: `Contact Form Submission from ${name}`,
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Received contact request:", { name, email, message });

  if (!name || !email || !message) {
    console.log("Validation failed: Missing fields");
    return res
      .status(400)
      .send({ success: false, message: "All fields are required." });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    text: `Ceci est un mail de : ${email}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .send({ success: false, message: "Failed to send message." });
    } else {
      console.log("Email sent successfully:", info.response);
      return res
        .status(200)
        .send({ success: true, message: "Message sent successfully!" });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

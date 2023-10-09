const express = require("express");
const { sendEmail } = require("../utils/sendEmail");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to express");
});

router.post("/emails/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  sendEmail({
    to: `alan.solis.dev@gmail.com`,
    subject: "Portfolio Email",
    text: `Name: ${name}
Email: ${email}

${message}`,
  });

  res.send({ message: "Your message is send :D" }).status(200);
});

module.exports = router;

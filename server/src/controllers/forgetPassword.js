const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../../prisma/main/client");
const nodemailer = require("nodemailer");
const winston = require("winston");

async function forgetPassword(req, res, next) {
  try {
    const userData = req.body;
    let user = await prisma.User.findUnique({
      where: { email: userData.email },
    });
    if (!user)
      return res
        .status(404)
        .json({ message: "We could not find user with given email" });
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        businessId: user.businessId,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION || "10m" }
    );

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EmailAddress,
        pass: process.env.EmailPassword,
      },
    });

    let mailOptions = {
      from: process.env.EmailAddress,
      to: user.email,
      subject: "Reset Your Password",
      /// update after Reset Password page created
      text: `frontend-page-forResetPassword${user.id}/${token}`,
    };

    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        winston.error(error);
      } else {
        /// just for testing  -> we won't send token !!
        return res.status(201).set("Authorization", `Bearer ${token}`).json({
          message: "Success",
        });
      }
    });
  } catch (ex) {
    next(ex);
  }
}

module.exports = { forgetPassword };

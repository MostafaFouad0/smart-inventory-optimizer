const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const prisma = require("../../prisma/main/client");
const nodemailer = require("nodemailer");

async function forgetPassword(req, res, next) {
  try {
    const userData = req.body;
    let user = await prisma.User.findUnique({
      where: { email: userData.email },
    });
    if (!user)
      return res
        .status(404)
        .json({ message: "WE could not find user with given email" });
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        businessId: user.businessId,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION || "1h" }
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
        console.log(error);
      } else {
        ///
        return res.status(201).set("Authorization", `Bearer ${token}`).json({
          message: "Succes",
        });
      }
    });
  } catch (ex) {
    next(ex);
  }
}

// async function login(req, res, next){
//     const userData = req.body;
// //validating data credentials
//     let { error } = loginSchema.validate(userData);
//     if (error) return res.status(400).json({message: error.details[0].message});

//     //checking if the user already exists
//     let user = await prisma.User.findUnique({
//         where: { username:  userData.username },
//     });
//     if(!user)
//         return res.status(400).json({message:'Username or password is incorrect'});
//     try{
//         const match = await bcrypt.compare(userData.password, user.password);
//         if(! match){
//             return res.status(400).json({message:'Username or password is incorrect'});
//         };

//     ///JWT
//         const token = jwt.sign(
//             { userId: user.id,
//                 username : user.username,
//                 email: user.email,
//                  isAdmin: user.isAdmin,
//                   businessId: user.businessId },
//             process.env.JWT_SECRET,
//             { expiresIn: process.env.JWT_EXPIRATION || '1h'  }
//         );

//         res
//             .status(201)
//             .set('Authorization', `Bearer ${token}`) // Attach the token to the header
//             .json({
//                 message: 'Login successfully'
//         });
//     }
//     catch(ex){
//         next(ex);
//     }
// }
module.exports = { forgetPassword };

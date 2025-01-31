const resetPasswordSchema = require("../validators/resetPassword");
const bcrypt = require("bcrypt");
const prisma = require("../../prisma/prisma");

async function resetPassword(req, res, next) {
  const userData = req.body;
  //validating data credentials
  let { error } = resetPasswordSchema.validate(userData);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const id = req.user.userId;

    const password = req.body.password;

    //hasing the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: { password: hashedPassword },
    });
    return res.status(200).json({ message: "Password updated successfully" });
  } catch (ex) {
    next(ex);
  }
}

module.exports = { resetPassword };

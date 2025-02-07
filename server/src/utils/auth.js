const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = async (password, saltRounds = 10) => {
  return await bcrypt.hash(password, saltRounds);
};

const generateToken = (user, expiration = "1h") => {
  return jwt.sign(
    {
      userId: user.id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      businessId: user.businessId,
    },
    process.env.JWT_SECRET,
    { expiresIn: expiration }
  );
};

module.exports = { hashPassword, generateToken };

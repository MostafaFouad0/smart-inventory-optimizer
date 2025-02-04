const adminSchema = require("../validators/admin");
const businessSchema = require("../validators/business");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../../prisma/main/client");

async function createAdmin(req, res, next) {
  try {
    const adminData = req.body.admin;
    const businessData = req.body.business;

    //validating data credentials
    let { error } = adminSchema.validate(adminData);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    error = businessSchema.validate(businessData).error;
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    //checking if the user already exists
    let existingAdmin = await prisma.User.findUnique({
      where: { email: adminData.email },
    });
    if (existingAdmin)
      return res.status(400).json({ message: "admin already exists" });

    //hasing the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(adminData.password, saltRounds);

    // Using a transaction to ensure atomicity
    const [business, admin] = await prisma.$transaction(async (prisma) => {
      // Create the business in the DB
      const business = await prisma.Business.create({
        data: {
          name: businessData.name,
          establishmentDate: businessData.establishmentDate,
          description: businessData.description,
          image: businessData.image,
        },
      });

      // Create the admin in the DB
      const admin = await prisma.User.create({
        data: {
          name: adminData.name,
          email: adminData.email,
          username: adminData.username,
          password: hashedPassword,
          phoneNumber: adminData.phoneNumber,
          isAdmin: true,
          businessId: business.id,
        },
      });

      return [business, admin];
    });

    ///JWT
    const token = jwt.sign(
      {
        userId: admin.id,
        username: admin.username,
        email: admin.email,
        isAdmin: admin.isAdmin,
        businessId: admin.businessId,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION || "1h" }
    );

    // Step 6: Send the response with the JWT attached to the header
    res
      .status(201)
      .set("Authorization", `Bearer ${token}`) // Attach the token to the header
      .json({
        message: "Admin and Business created successfully",
        admin: {
          id: admin.id,
          email: admin.email,
        },
        business: {
          id: business.id,
          name: business.name,
        },
      });
  } catch (ex) {
    next(ex);
  }
}
module.exports = { createAdmin };

const staffSchema = require('../validators/staff');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../../prisma/prisma');

async function createStaff(req, res, next){
    try{
        const staffData = req.body.staff;
        const adminData = req.user
    //validating data credentials
        let { error } = staffSchema.validate(staffData);
        if (error) return res.status(400).json({message: error.details[0].message});

    //checking if the user already exists
        let existingStaff = await prisma.User.findUnique({
            where: { email:  staffData.email},
        });
        if(existingStaff) return res.status(400).json({message:'Staff already exists'});

    //hasing the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(staffData.password, saltRounds);

    // Create a staff
        const staff = await prisma.User.create({
            data: {
                name: staffData.name,
                email: staffData.email,
                username: staffData.username,
                password: hashedPassword,
                phoneNumber: staffData.phoneNumber,
                isAdmin: false,
                businessId: adminData.businessId,
            },
        });
        
    ///JWT
        const token = jwt.sign(
            { userId: staff.id, email: staff.email, isAdmin: staff.isAdmin, businessId: staff.businessId },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION || '1h'  }
        );

    ///end the response with the JWT attached to the header
        res
            .status(201)
            .set('Authorization', `Bearer ${token}`)
            .json({
                message: 'Staff created successfully',
                Staff: {
                    id: staff.id,
                    email: staff.email,
                },
                business: {
                    id: adminData.businessId,
                }
        });
    }
    catch(ex){
        next(ex);
    }
}
async function deleteStaff(req, res, next) {
    const userId = parseInt(req.params.userId);

    // Validate the user ID
    if (isNaN(userId)) {
        return res.status(400).send({ message: 'Invalid user ID' });
    }

    try {
        // Check if the user exists and is not an admin
        const user = await prisma.User.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        if (user.isAdmin) {
            return res.status(403).send({ message: 'Cannot delete an admin user' });
        }

        // Delete the user
        await prisma.User.delete({
            where: { id: userId },
        });

        res.status(200).json({message:`successfully deleted staff with id: ${userId}`});
    } catch (ex) {
        next(ex);
    }
}
async function listStaff(req, res, next){
    const page = parseInt(req.query.sortBy) || 1;
    const orderBy = req.query.orderBy || 'name';
    const sortOrder = req.query.sortOrder || 'asc';
    try{
        const users = await prisma.User.findMany({
            where : {
                AND: [
                    { isAdmin: false },
                    { businessId: req.user.businessId }
                ]
            },
            skip: ((page - 1) * 5),
            take: 5,
            orderBy: { [orderBy]:sortOrder },
            select: {id:true,name:true,email:true,username:true,phoneNumber:true, createdAt:true}
        });
        res.status(200).send(users);
    }catch(ex){
        next(ex);
    }
}
module.exports = {createStaff, deleteStaff, listStaff};
const loginSchema = require('../validators/login');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); /// 
const prisma = require('../../prisma/prisma');

async function login(req, res, next){
    const userData = req.body;        
//validating data credentials
    let { error } = loginSchema.validate(userData);
    if (error) return res.status(400).json({message: error.details[0].message});

    //checking if the user already exists
    let user = await prisma.User.findUnique({
        where: { username:  userData.username },
    });
    if(!user) 
        return res.status(400).json({message:'Username or password is incorrect'});
    try{
        const match = await bcrypt.compare(userData.password, user.password);
        if(! match){
            return res.status(400).json({message:'Username or password is incorrect'});
        }; 
        
    ///JWT
        const token = jwt.sign(
            { userId: user.id, 
                username : user.username, 
                email: user.email,
                 isAdmin: user.isAdmin,
                  businessId: user.businessId },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION || '1h'  }
        );

        res
            .status(201)
            .set('Authorization', `Bearer ${token}`) // Attach the token to the header
            .json({
                message: 'Login successfully'
        });
    }
    catch(ex){
        next(ex);
    }
}
module.exports = {login};
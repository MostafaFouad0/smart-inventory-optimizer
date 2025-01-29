const dotenv = require('dotenv').config();
 module.exports = function(){
    if(!process.env.JWT_SECRET)throw new Error("JWT Key is not defined");
    if(!process.env.DATABASE_URL)throw new Error("Database Connection String is not defined");
    if(!process.env.DIRECT_URL)throw new Error("Database Direct_URL is not defined");
 }
const express = require('express');
const endpoints = require('../utils/endpoints');
const error = require('../middlewares/error');
const admin = require('../routes/admin');
const staff = require('../routes/staff');
const login = require('../routes/login');
const forgetpassword = require('../routes/forgetPassword')
const resetpassword = require('../routes/resetPassword')

module.exports = function (app) {
    app.use(express.json());
    app.use(endpoints.ADMIN, admin);
    app.use(endpoints.STAFF,staff);
    app.use(endpoints.AUTH, login);
    app.use(endpoints.FORGETPASSWORD, forgetpassword);
    app.use(endpoints.RESETPASSWORD, resetpassword);
    app.use(error); //make sure this is the last route always
};
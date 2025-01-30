const express = require('express');
const endpoints = require('../utils/endpoints');
const error = require('../middlewares/error');
const admin = require('../routes/admin');
const staff = require('../routes/staff');
const login = require('../routes/login');

module.exports = function (app) {
    app.use(express.json());
    app.use(endpoints.ADMIN, admin);
    app.use(endpoints.STAFF,staff);
    app.use(endpoints.AUTH, login);
    app.use(error); //make sure this is the last route always
};
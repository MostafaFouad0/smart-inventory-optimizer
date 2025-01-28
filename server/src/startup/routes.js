const express = require('express');
const error = require('../middlewares/error')
const admin = require('../routes/admin');
const staff = require('../routes/staff');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/admin', admin);
    app.use('/api/staff',staff)
    app.use('/api/', error); //make sure this is the last route always
};
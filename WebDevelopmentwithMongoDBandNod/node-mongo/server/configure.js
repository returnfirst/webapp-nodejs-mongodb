const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes');

const config = function (app) {
    app.use(express.static('public'));
    app.use(morgan('combined'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    routes(app);

    return app;
};

module.exports = config;
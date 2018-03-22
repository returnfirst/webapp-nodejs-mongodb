const path = require('path');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');

module.exports = function(app) {
    app.use(morgan('dev'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));

    app.engine('handlebars', exphbs.create({
        defaultLayout: 'main',
        layoutsDir:  `${app.get('views')}/layouts`,
        partialsDir: [ `${app.get('views')}/partials`]
    }).engine);
    app.set('view engine', 'handlebars');
    
    app.use(methodOverride());
    app.use(cookieParser('some-secret-value-here'));
    routes(app);
    
    app.use('/public/', express.static(path.join(__dirname, '../public')));

    if ('development' === app.get('env')) {
       app.use(errorHandler());
    }

    return app;
};
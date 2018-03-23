const express = require('express');
const router = express.Router();

const starwarsModel = require('../models/starwars');

module.exports = function(app) {
    router.get('/viewAll', function(req, res) {
        starwarsModel.find({pubDate: '2017'}, function(err, docs) {
            const toClient = {};
            toClient.lastBuildDate = new Date();
            toClient.total = 25;
            toClient.start = 1;
            toClient.display = 10;
            toClient.items = docs;
            res.json(toClient);
        });
    });

    router.post('/starwars', function(req, res) {
        const fromClient = req.body;
        const episode12 = new starwarsModel(fromClient);
        episode12.save();
        res.json({status: 'ok'});
    });

    app.use(router);
};

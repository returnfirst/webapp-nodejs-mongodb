const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.get('/api/movie/:movieName', function(req, res) {
    if (req.params.movieName === 'starwars') {
        axios({
            url: 'http://localhost:3000/movie/starwars',
            method: 'get'
        }).then(function(fromServer) {
            res.json(fromServer.data);
        }).catch(function(err){
            res.json(err);
        });
    }
});

app.listen(4000, function() {
    console.log('server ready on port 4000...')
});
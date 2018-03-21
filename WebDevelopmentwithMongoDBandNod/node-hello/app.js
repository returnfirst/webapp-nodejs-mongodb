const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('hello root request...');
});

app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});

app.get('/user', function(req, res) {
    res.send('<h1>안녕하세요 내님</h1>');
});

app.get('/user/my', function(req, res) {
    res.send('<h2>내님 노드 세계에 오신걸 환영합니다.</h2>');
});

app.listen(3000, function() {
    console.log('server ready on 3000');
});
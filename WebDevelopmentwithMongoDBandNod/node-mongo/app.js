const express = require('express');
const config = require('./server/configure');

const app = config(express());

app.listen(3000, function() {
    console.log('server ready on 3000');
});
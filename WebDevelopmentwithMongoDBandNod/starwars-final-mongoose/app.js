// import { Mongoose } from 'mongoose';
const mongoose = require('mongoose');

const express = require('express');
const config = require('./server/configure');

const app = config(express());

mongoose.connect('mongodb://localhost:27017/movie');
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
})

app.listen(3000, function() {
    console.log('server ready on 3000');
});
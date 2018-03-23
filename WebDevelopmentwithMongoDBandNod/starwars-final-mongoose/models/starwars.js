const mongoose = require('mongoose'),
const Schema = mongoose.Schema,

const starwarsSchema = new Schema({
    title:      { type: String },
    link:       { type: String },
    image:      { type: String },
    subtitle:   { type: String },
    pubDate:    { type: String },
    director:   { type: String },
    actor:      { type: String },
    userRating: { type: Number }
});

module.exports = mongoose.model('starwars', starwarsSchema);

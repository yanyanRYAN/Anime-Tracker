const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const animeSchema = new Schema({
    title: {type: String},
    synopsis: {type: String},
    audience_rating: {type: String},
    image_url: {type: String},


}, {timestamps: true});

//model
const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;
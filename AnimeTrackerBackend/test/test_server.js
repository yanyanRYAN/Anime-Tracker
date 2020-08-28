const mocha = require('mocha');
const express = require('express');
const cors = require('cors'); //cross origin resource sharing
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

before(function () {
    const uri = 'mongodb://localhost/AnimeTrackerDB';
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB connection established successfully");
    });
})
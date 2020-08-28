const express = require('express');
const cors = require('cors'); //cross origin resource sharing
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = require('./dbConnect');

const app = express();
const PORT = process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//import routes
const animeRouter = require('./routes/anime.route');
const userRouter = require('./routes/user.route');

//use routes
app.use('/anime', animeRouter);
app.use('/user', userRouter);

//connect to database
db.connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
})




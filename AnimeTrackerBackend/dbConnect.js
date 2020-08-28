const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost/AnimeTrackerDB';

function connect(){
    return new Promise((resolve,reject) => {
        mongoose.connect(DB_URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
        .then((res, err) => {
            if(err) {
                return reject(err);
            } else {
                console.log(`Connected to: ${DB_URI}`);
                resolve();
            }
        })
    })
}

module.exports = { connect };
const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find().then(users => 
        res.json(users))
        .catch(err=> res.json('Error: '+ err));
})

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    // we'll figure out the password salting later
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const newUser = new User({
        username,
        email,
        password,
        firstName,
        lastName
    });

    newUser.save().then(()=> res.json('User Created!'))
    .catch( err => res.status(400).json('Error: ' + err));
})

module.exports = router;
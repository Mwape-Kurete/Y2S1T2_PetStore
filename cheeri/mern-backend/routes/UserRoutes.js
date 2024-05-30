const express = require('express'); 
const router = express.Router();
const User = require('../models/User'); 
const bcrypt = require('bcryptjs'); // To hash the password
const jwt = require('jsonwebtoken'); // For creating JWT tokens


//Adding a new user 
router.post('/register', async (req, res) => {
    const {name, email, password} = req.body; 

    try{
        let user = await User.findOne({ email }); //checking to see if the user already exists 
        if (user) {
            return res.status(400).json({ error: "User already exists"});
        }

        //creating the user object
        user = new User({
            name,
            email,
            password,
        }); 

        // //Hash the password before saving it in DB
        // const salt = await bcrypt.getSalt(10);
        // user.password = await bcrypt.hash(password, salt);

        await user.save(); 


    }catch (err){
        res.status(400).json({ error: err.message });
    }
}); 

//Get all users 
router.get('/', async (req, res) => {
    try {
        const users = await User.find(users);
    }catch (err) {
        res.status(400).json({ error: err.message});
    }
})



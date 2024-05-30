const express = require('express'); 
const router = express.Router();
const User = required('../models/User'); 

//Adding a new user 
router.post('/register', async (req, res) => {
    const {name, email, password} = req.body; 

    try{

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



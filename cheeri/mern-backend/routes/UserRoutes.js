const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Adding a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        user = new User({
            name,
            email,
            password,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        res.status(201).json(user);
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(400).json({ error: err.message });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(400).json({ error: err.message });
    }
});

// User login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let currentUser = await User.findOne({ email });

        if (!currentUser) {
            return res.status(400).json({ error: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, currentUser.password);

        if (!isMatch) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        // Remove password field before sending the user object
        //renaming the password field to avoid an internal server error 
        const { password: userPassword, ...userWithoutPassword } = currentUser.toObject();
        res.status(200).json(userWithoutPassword);
    } catch (err) {
        console.error('Error logging in user:', err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;

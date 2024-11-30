import express from 'express';

import db from '../db/connection.js';
import AuthModel from '../models/auth.js';
import bcryptjs from 'bcryptjs';  // For hashing...

const router = express.Router();

router.get('/', (req, res) => {
    res.json("Hello");
})

router.post('/login', async (req, res) => {
    const { email, pass } = req.body;

    try {
        const user = await AuthModel.findOne({ email: email });

        if (user) {  // If user exists
            const isMatch = await bcryptjs.compare(pass, user.pass);  // Compare
            if (isMatch) {
                return res.status(200).json('Success!');
            }
            else {
                return res.status(401).json('The password is incorrect');
            }
        }
        else {
            return res.status(404).json('The email is not registered');
        }
    }
    catch (err) {
        return res.status(500).json({ message: 'Internal server error', error: err.message });
    }
});

router.post('/register', async (req, res) => {
    const { name, email, pass } = req.body;

    try {
        const user_name = await AuthModel.findOne({ name: name });
        const user_email = await AuthModel.findOne({ email: email });

        if (user_email) {
            return res.status(400).json('The email is already taken. Choose a different one.');
        }
        if (user_name) {
            return res.status(400).json('The name is already taken. Choose a different one.');
        }

        // If both are unique
        // if (!user_name && !user_email) {  // If email's not yet taken
        const hashedPass = await bcryptjs.hash(pass, 10);  // 10- # salt rounds
        const newUser = { name, email, pass: hashedPass };
        await AuthModel.create(newUser);
        return res.status(201).json('Success!');
    }
    catch (err) {
        return res.status(500).json({ message: 'Internal server error', error: err.message });
    }
});

export default router;
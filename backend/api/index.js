// Js vs jsx?
// Named imports?- {} vs no {}...
// "scripts": {
//     "start": "nodemon"
// },
// npm start
// Write API codes here

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// import db from './db/connection.js';
import connectDB from './connection.js';
// import routes from './routes/routes.js';

dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

connectDB();  // Connect to db before starting server

app.use(express.json());  // Transform to json format
app.use(cors(
    {
        origin: 'https://login-jede.vercel.app/',  // To allow URL...
        methods: ['POST', 'GET'], 
        credentials: true
    }
));
// app.use(routes);

// mongoose.connect('<my_api>');
app.get('/', (req, res) => {
    res.json("Hello");
});

// mongoose.connect('mongodb://localhost:...')
// mongoose.connect('mongodb://<ip addr>:.../<db name>')

app.listen(PORT, () => {
    console.log(`Server is running and is listening at port ${PORT}`);
});

// Try Joi or express-validator to validate user input
// bcryptjs instead of bcrypt- for Vercel
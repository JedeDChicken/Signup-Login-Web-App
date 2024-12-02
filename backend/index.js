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
// import routes from './routes/routes.js';
import connectDB from './db/connection.js';
import routes from './routes/routes.js';

dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

connectDB();  // Connect to db before starting server

app.use(express.json());  // Transform to json format

const corsOptions = {
    origin: ['https://jede-login.vercel.app', 
        'https://jede-login.vercel.app/register', 
        'https://jede-login.vercel.app/login', 
        // 'https://jede-login-backend.vercel.app', 
        // 'https://jede-login-backend.vercel.app/register', 
        // 'https://jede-login-backend.vercel.app/login', 
        'http://localhost:5173', 
        'http://localhost:5173/register'
    ],  // To allow URL...
    // origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], 
    // allowedHeaders: ['X-CSRF-Token', 
    //     'X-Requested-With', 
    //     'Accept', 
    //     'Accept-Version', 
    //     'Content-Length', 
    //     'Content-MD5', 
    //     'Content-Type', 
    //     'Date', 
    //     'X-Api-Version'
    // ], 
    credentials: true, 
    // preflightContinue: false,
    // optionsSuccessStatus: 204
}
app.use(cors(corsOptions));
// app.use(cors());
app.use(routes);

// mongoose.connect('<my_api>');
// app.get('/', (req, res) => {
//     res.json("Hello");
// });

// mongoose.connect('mongodb://localhost:...')
// mongoose.connect('mongodb://<ip addr>:.../<db name>')

app.listen(PORT, () => {
    console.log(`Server is running and is listening at port ${PORT}`);
});

// Try Joi or express-validator to validate user input
// bcryptjs instead of bcrypt- for Vercel
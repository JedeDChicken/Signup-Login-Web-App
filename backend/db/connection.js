// import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from 'mongoose';  // Use Mongoose instead of MongoClient directly, Mongoose- ODM (Object Data Modeling)... schema-based solutions
import dotenv from 'dotenv';

dotenv.config();
// const uri = process.env.MONGO_URI;  //Add the db name to URI (auth_db)...

// Create MongoClient with MongoClientOptions object to set Stable API ver
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// Connect to MongoDB w/ Mongoose
// Put in function for Vercel...
const connectDB = async () => {
  try {
    // Connect client to server	(optional starting in v4.7)
    // await mongoose.connect(uri, {  // Deprecated
    //   useNewUrlParser: true,  // Recommended for connection strings
    //   useUnifiedTopology: true  // Modern connection management
    // });
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  }
  catch(err) {
      // Ensures that client will close when you finish/error
      // await client.close();
      console.error('Failed to connect to MongoDB', err);
      throw err;
  }
}

// run().catch(console.dir);
// const db = client.db('auth_db');  // Automatically creates 'auth_db' database

// const db = mongoose.connection;  // Define db connection

// // Handle connection events
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('MongoDB connection is open');
// });

export default connectDB;
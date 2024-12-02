import mongoose from 'mongoose';

const AuthSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    pass: String
});

const AuthModel = mongoose.model('auth_dbs', AuthSchema);  // Mongoose automatically converts this to lowercase then pluralized...
// module.exports = AuthModel;
export default AuthModel;
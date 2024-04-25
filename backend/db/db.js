const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const Admin = mongoose.model('Admin', AdminSchema);
module.exports ={
    Admin
}
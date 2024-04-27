const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const MembersSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
    id: String
});

const Members = mongoose.model('Members', MembersSchema);
const Admin = mongoose.model('Admin', AdminSchema);
module.exports ={
    Admin,
    Members
}
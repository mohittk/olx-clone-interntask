const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    user_email : String,
    user_password : String,
    user_name: String,
    user_mobilenumber: Number,

})

module.exports = mongoose.model('Users', User);
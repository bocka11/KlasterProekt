const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username:String,
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    address:String,
    country:String,
    date_joined:{
        type:Date,
        default:Date.now()
    },
    Date_of_birth:Date,


})
const UserModel = mongoose.model('User',User,'users');

module.exports = UserModel;

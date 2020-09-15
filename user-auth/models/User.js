const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const User = new Schema({
    username:String,
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    salt:String,
    address:String,
    country:String,
    date_joined:{
        type:Date,
        default:Date.now()
    },
    Date_of_birth:Date,


})
User.methods.setPassword = (password)=>{
    this.salt = crypto.randomBytes(16).toString(`hex`);

    this.password = crypto.pbkdf2Sync(password, this.salt,  
        1000, 64, `sha512`).toString(`hex`); 
}

User.methods.validatePassword = (password)=>{
    let hash = crypto.pbkdf2Sync(password, this.salt,  
        1000, 64, `sha512`).toString(`hex`); 
    return hash === this.password;
}
const UserModel = mongoose.model('User',User,'users');

module.exports = UserModel;

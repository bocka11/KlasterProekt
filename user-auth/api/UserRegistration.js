const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');


function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

router.post('/signup',async (req,res)=>{
    console.log(isEmpty(req.body));
    if(isEmpty(req.body)){return;}
    const body = req.body;
    console.log(typeof body.password);
    const salt = crypto.randomBytes(16).toString(`hex`);
    const hash = crypto.pbkdf2Sync(req.body.password,salt,  
        1000, 64, `sha512`).toString(`hex`); 
    req.body.password = hash;
    let user = req.body;
    user.salt = salt;
    const userEntry = new User(user);
    
    const createdEntry = await userEntry.save();
    
    res.status(201).send(createdEntry);
});

router.post('/login',async(req,res)=>{
    if(isEmpty(req.body)){return;}
    const username = req.body.username;
    const password = req.body.password;
    const records = await User.findOne({"username":username});
    console.log(records);
    if(records){
        let hash = crypto.pbkdf2Sync(password, records.salt,  
            1000, 64, `sha512`).toString(`hex`);
        const token = jwt.sign({username},'tajna');
        const msg = {"message":"You are logged in",token};
        hash===records.password?res.send(msg):res.send("Password does not match");

        
    }else{res.send("User Not Found")};
})

module.exports = router;
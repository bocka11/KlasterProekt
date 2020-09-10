const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/signup',async (req,res)=>{
    console.log(req);
    try{
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(req.body.password,salt);
        req.body.password = hashedpassword;
    }catch(err){
        console.log(err)
    }
    const userEntry = new User(req.body);
    const createdEntry = await userEntry.save();
    console.log(createdEntry);
    res.status(201).send(createdEntry);
});

router.post('/login',async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const records = await User.findOne({"username":username});
    console.log(records);
    if(records){
        bcrypt.compare(records.password,password).then((res)=>{
            if(res){console.log('se sovpagjaat password'); res.send("Proba")}else{res.send('greka pri komp')}
        }).catch(err=>console.log(err));
    }else{res.send('greska')};
})

module.exports = router;
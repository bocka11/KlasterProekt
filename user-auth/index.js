const express = require('express');
const app = express();
const port = 3030;
const register = require('./api/UserRegistration');
const notfound = require('./api/NotFound');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');

const corsOptions = {
    origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));



require('dotenv').config();

const db_url = process.env.DB_URL || 'mongodb://localhost:27017/klaster'

try{
    mongoose.connect(db_url,{useNewUrlParser: true});
    const db = mongoose.connection;
    db.on('error',()=>console.log("Error while connecting to db"));
    db.once('open',()=>{
        console.log("Connected to db");
    })
    }catch(err){
    
    }


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/',(req,res)=>{
    res.send('Proba');
})

app.use('/api',register);
app.use('/',notfound);
app.listen(port,()=>{
    console.log('Server has started');
});
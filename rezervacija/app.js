const express = require("express");

const app = express();
const port = process.env.PORT || 3300;
const bodyparser = require('body-parser');


const routes = require("./api/routes");
console.log(typeof routes);

require('dotenv').config();

app.get('/',(req,res)=>{
    res.send("Proba");
});
app.use(bodyparser.json());

app.use('/api',routes);


app.listen(port,()=>{

    console.log(`Server started at ${port}`);
})
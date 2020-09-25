const express = require("express");
const port = 3333;
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();

app.post();

app.use(cors());
app.use(bodyparser.json());

 app.listen(port,()=>{

    console.log(`Server started at ${port}`);
})
const express = require('express');
const router = express.Router();



router.all('*',(req,res)=>{
    res.status(404).send('Error 404 Not Found');
});

module.exports = router;
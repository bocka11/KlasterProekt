const router = require('express').Router();
const jwt = require('json-web-token');
const amqp = require('amqplib');

router.post('/naracka',async (req,res)=>{
    const token = req.header('Token');
    jwt.verify(token,process.env.TAJNA,(err,decoded)=>{
        if(decoded){
            
        }else{res.send("Nemate pristap");
                return;}
    });
   try {
    console.log(req.body);
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("queue");
    await channel.sendToQueue("queue",Buffer.from(JSON.stringify(res.body.data)));
    res.send({"msg":"Vasata naracka se procesira"});
} catch (error) {
    console.log(error);
}


});

module.exports = router;
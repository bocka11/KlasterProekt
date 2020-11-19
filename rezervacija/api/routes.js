const router = require('express').Router();
const jwt = require('jsonwebtoken');
const amqp = require('amqplib');

const rabbitmq_url = process.env.RAB_URL || "amqp://localhost:5672";

router.post('/naracka',async (req,res)=>{
    const token = req.header('Token');
    console.log(token);
    console.log(typeof jwt.verify);
    
    jwt.verify(token,'tajna',(err,decoded)=>{
        if(decoded){
            
        }else{res.send("Nemate pristap");
                return;}
    });
   try {
    console.log(req.body);
    const connection = await amqp.connect(rabbitmq_url);
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("queue");
    await channel.sendToQueue("queue",Buffer.from(JSON.stringify(req.body)));
    res.send({"msg":"Vasata naracka se procesira"});
} catch (error) {
    console.log(error);
}


});

module.exports = router;
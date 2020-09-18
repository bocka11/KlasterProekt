const amqp = require('amqplib');

const connect = async ()=>{
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("queue");
        channel.consume("queue",message=>{
            const consumed = JSON.parse(message.content.toString());
            console.log(consumed);
            channel.ack(message);
        });


    } catch (error) {
        
    }
}
connect();
console.log("Server started");
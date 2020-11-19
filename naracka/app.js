const amqp = require('amqplib');
const axios = require('axios');
const { response } = require('express');

const db_url =  "mongo://localhost:27017/Events";
const catalog_url = "http://localhost:8080//api/update/";

const rabbitmq_url = process.env.RAB_URL || "amqp://localhost:5672";
async function fetchEvent(event){
    const data = axios.get(catalog_url+"");

}

const connect = async ()=>{
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("queue");
        channel.consume("queue",message=>{
            const consumed = JSON.parse(message.content.toString());
            console.log(consumed);
            const {user,ime,karti,ccn,cvv,edate,event} = consumed;
            axios.put(`${catalog_url}${event}/${karti}`,{}).then(response=>console.log(response.data)).catch(e=>console.log(e));
            

            channel.ack(message);
        });


    } catch (error) {
        
    }
}
connect();
console.log("Server started");
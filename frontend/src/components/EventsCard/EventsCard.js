import React,{useState,useEffect} from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import "./EventsCard.css";

const EventsUrl = "http://localhost:8080/api/getall"




const description = "proba";
const EventCardGroup = (props)=>{
    
    const [eventsList,setEventsList] = useState([]);
    useEffect(()=>{

        async function fetchData(){
            const response = await axios.get(EventsUrl);
            setEventsList(response.data);
        }
      fetchData();
    
    },[]);

    const [event,setEvent]=useState('');
    const [mesta,setMesta]=useState(0);
    const [red,setRed] = useState(false);
     

    return (
        <div className="content">
            
            {red?<Redirect to={`/orderpage?user=${props.user}&token=${props.token}&event=${event}&seats=${mesta}`}/>:null}
        
            {eventsList.map((event)=>{
                return(
                <Card className="card" >
                <CardContent>
                <Typography variant="h5" component="h2">
                   {event.name}
                </Typography>
                <Typography variant="body2" component="p">
                    {event.location}
                </Typography>
                <Typography className="pos" color="textSecondary">
                    {event.date}
                </Typography>
                <Typography gutterBottom variant="h6" component="h3">
                    Cena: {event.price}
                 </Typography>
                 <Typography gutterBottom variant="h6" component="h3">
                    Preostanati Mesta: {event.seats}
                 </Typography>
                </CardContent>
                <CardActions>
                <Button onClick={()=>{
                    setEvent(event.name);
                    console.log(event.name);
                    setMesta(event.seats);
                    console.log(props.user,props.token);
                    
                    if(props.user!==""&props.token!=="")
                    setRed(true);

                }} size="small">Kupi</Button>
                </CardActions>

            </Card>)
            })}
        </div>
    );


}

export default EventCardGroup;

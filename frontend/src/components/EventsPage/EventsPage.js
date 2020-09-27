import React,{useState,useEffect} from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar'
import queryString from 'query-string';


import './EventsPage.css'

import EventCardGroup from '../EventsCard/EventsCard';






const EventsPage = ({location})=>{

    const [user,setUser] = useState('');
    const [token,setToken] = useState('');

   useEffect(()=>{
    const {user,token} = queryString.parse(location.search);
    setUser(user);
    setToken(token);
    console.log(user,token);

   },[location.search]);

    return <div className="container">
                <NavBar/>
                
                <EventCardGroup user={user} token={token}/>
                
            </div>
}

export default EventsPage;
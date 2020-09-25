import React,{useState,useEffect} from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar'


import './EventsPage.css'

import EventCardGroup from '../EventsCard/EventsCard';






const EventsPage = ()=>{

   

    return <div className="container">
                <NavBar/>
                
                <EventCardGroup/>
                
            </div>
}

export default EventsPage;
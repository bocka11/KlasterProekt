import React from 'react';
import NavBar from '../NavBar/NavBar';
import {useState,useEffect} from 'react';
import queryString from 'query-string';

import "./OrderPage.css"

const OrderPage = ({location})=>{
    const [user,setUser] = useState("");
    const [token,setToken] = useState("");
    const [event,setEvent] = useState("");
    const [seats,setSeats] = useState(-1);

    useEffect(()=>{
    const {user,token,event,seats} = queryString.parse(location.search);
    console.log(user,token,event,seats);
    setUser(user);
    setToken(token);
    setEvent(event);
    setSeats(seats);
    },[]);

    return <div className="container">
            <NavBar/>
            <div className="innerContainer">
                
            </div>
            </div>
}

export default OrderPage;
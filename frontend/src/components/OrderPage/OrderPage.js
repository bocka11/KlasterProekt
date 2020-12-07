import React from 'react';
import NavBar from '../NavBar/NavBar';
import {useState,useEffect} from 'react';
import queryString from 'query-string';
import axios from 'axios';
import "./OrderPage.css"
import { findRenderedComponentWithType } from 'react-dom/test-utils';

const  url = process.env.REACT_APP_REZERVACIJA_URL || "http://localhost:3300/api/naracka";
const OrderPage = ({location})=>{
    const [user,setUser] = useState("");
    const [token,setToken] = useState("");
    const [event,setEvent] = useState("");
    const [seats,setSeats] = useState(-1);
    const [karti,setKarti] = useState(0);
    const [ime,setIme] = useState("");
    const [ccn, setCcn] = useState(0);
    const [cvv,setCvv] = useState(0);
    const [edate,setEdate] = useState("");
    const [data,setData] = useState({});
    const [red,setRed] = useState(false);
    useEffect(()=>{
        axios.defaults.headers.post['Token'] = token;
        axios.post(url,data).then(response=>{console.log(response.body);}).catch(err=>console.log(err));
    },[data]);
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
                <label>{event}</label><br/>
                <label>Slobodnimesta: {seats}</label>
                <input type="text" placeholder="broj na karti" onChange={(event)=>{setKarti(event.target.value)}}></input>
                <label>Credit card Info</label>
                <input type="text" placeholder="Name" onChange={(event)=>{setIme(event.target.value)}}></input>
                <input type="text" placeholder="CreditCard number" onChange={(event)=>{setCcn(event.target.value)}}></input>
                <input type="text" placeholder="CVV" onChange={(event)=>{setCvv(event.target.value)}}></input>
                <input type="text" placeholder="Expirion date" onChange={(event)=>{setEdate(event.target.value)}}></input>
                <button onClick={(e)=>{
                    setData({user,ime,karti,ccn,cvv,edate,event});

                }}>KUPI</button>
            </div>
            </div>
}

export default OrderPage;
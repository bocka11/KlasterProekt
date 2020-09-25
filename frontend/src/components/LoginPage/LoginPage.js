import React from 'react';
import {useState,useEffect} from 'react';

import NavBar from '../NavBar/NavBar'
import Content from '../Content/Content'

import './Login.css'

const LoginPage = (props)=>{
    const [auth,setAuth] = useState(false);
    useEffect(()=>{
        props.setAuth(auth);
        console.log("Od login page:",auth);
    },[auth]);
    return <div className="container">
                <NavBar/>
                <Content setAuth={(a)=>{setAuth(a)}}/>
            </div>
}

export default LoginPage;
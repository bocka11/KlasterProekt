import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import TextComp from '../TextComp/TextComp.js';

import './Content.css';

import axios from 'axios';

const Content = (props)=>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [data,setData] = useState({});
    const [auth,setAuth] = useState(false);
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    useEffect(()=>{
        console.log(data);
        axios.post('http://localhost:3030/api/login',data).then(
            response => {
                setAuth(true);
                console.log(response.data)}).catch(err=>{ console.log("Poraka od login") ;console.log(err)});
    },[data]);
    useEffect(()=>{
        props.setAuth(auth);
        console.log("Od content: ",auth);},[auth]);
    return <div className="outerContainer">
            <form onSubmit={e=>{
                e.preventDefault();
                setData({
                    "username":username,
                    "password":password
                })
            }}>
             <div className="innerContainer">
             <TextComp name="Username" type="text" onSelected={(selected)=>{setUsername(selected) }} />
             <TextComp name="Password" type="password" onSelected={(selected)=>{setPassword(selected) }}/>
            <div class="form__group">
                
            </div>
            <Link to={auth?"/events":"/"}>
             <button className="buttonn mt-20" type="submit ">Sign In</button>
             </Link>
             </div>
             </form>
            </div>
}
export default Content;
import React,{useState,useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';
import TextComp from '../TextComp/TextComp.js';

import './Content.css';

import axios from 'axios';

const Content = (props)=>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [data,setData] = useState({});
    const [auth,setAuth] = useState(false);
    const [pass,setPass] = useState(false);
    const [token,setToken] = useState('');
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    useEffect(()=>{
        console.log(data);
        axios.post('http://localhost:3030/api/login',data).then(
            response => {
                console.log(response.data);
                if(response.data.code == "2"){
                    setPass(true);
                }
                if(response.data.code==1){
                setAuth(true);
                setToken(response.data.token);
                console.log("token",token);
            }
                console.log(response.data)}).catch(err=>{ console.log("Poraka od login") ;console.log(err)});
    },[data]);
    useEffect(()=>{
        props.setAuth(auth);
        console.log("Od content: ",auth);},[auth]);
    return <div className="outerContainer">
            {console.log("Vo return:",auth)}
            {auth?<Redirect to={`/events?user=${username}&token=${token}`}/>:null}
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
            
             <button className="buttonn mt-20" type="submit ">Sign In</button>
            
             </div>

             {pass?<label>Password doesnt match</label>:null}
             </form>
             
            </div>
}
export default Content;
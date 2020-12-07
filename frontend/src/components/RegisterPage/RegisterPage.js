import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import log from 'loglevel';
import remote from 'loglevel-plugin-remote';



import NavBar from '../NavBar/NavBar'
import Content from '../Content/Content'
import {DatePicker} from 'react-datepicker';

import CountryPicker from '../CountryPicker/CountryPicker';

import './RegisterPage.css'

import TextComp from '../TextComp/TextComp';

const logFormat = log =>({
    msg: log.message,
    level: log.level.label,
    stacktrace: log.stacktrace
})
remote.apply(log, { format: logFormat, url: '/logger' });
log.enableAll();

const register_url = window.REACT_APP_REG_URL || process.env.REACT_APP_REG_URL || 'http://localhost:3030/api/signup';


const RegisterPage = ()=>{
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');
    const [repassword,setRepassword]=useState('');
    const [address,setAddress] = useState('');
    const [country,setCountry] = useState('');
    const [birthday,setBirthday] = useState(new Date());
    const [data,setData] = useState({});
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    function selected(value){
        setFirstname(value);
        console.log(firstname)
    }

    useEffect(()=>{
        console.log(data);

         axios.post(register_url,data).then(response => console.log(response.data)).catch(err => console.log(err));
    },[data])

    return <div className="container">
                <NavBar/>
                <div className="outerContainer">
                 <div className="innerContainer">
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    if(password!==repassword){
                        alert("Password does not match");
                        return;
                    }
                    setData({
                    "firstname":firstname,
                    "lastname":lastname,
                    "username":username,
                    "email":email,
                    "password":password,
                    "address":address,
                    "country":country,
                    "birthday":birthday
                });
                 }}>
                <TextComp name="FirstName" type="text" onSelected={(selected)=>{setFirstname(selected) }}/>
                 <TextComp name="LastName" type="text" onSelected={(selected)=>{setLastname(selected);}}/>
                 <TextComp name="Username" type="text" onSelected={(selected)=>{setUsername(selected);}}/>
                 <TextComp name="Email" type="email" onSelected={(selected)=>{setEmail(selected);}}/>
                 <TextComp name="Password" type="password" onSelected={(selected)=>{setPassword(selected);}}/>
                 <TextComp name="Retype Password" type="password" onSelected={(selected)=>{setRepassword(selected);}} />
                 <TextComp name="Address" type="text" onSelected={(selected)=>{setAddress(selected);}}/>
                 <TextComp name="Country" type="text" onSelected={(selected)=>{setCountry(selected);}}/>
                 <TextComp name="Date of birth" type="date" onSelected={(selected)=>{setBirthday(selected); 

                
                }}/>
                 <button className="buttonn mt-20" type="submit">Register</button>
                 </form>
                </div>
                 </div>
            </div>
}

export default RegisterPage;
import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import {useState,useEffect} from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import EventsPage from './components/EventsPage/EventsPage';
import OrderPage from './components/OrderPage/OrderPage';
import countryList from './resources/CountriesList';

import GuardedRoute from './components/GuardedRoute/GuardedRoute';

const App = ()=>{
    console.log(countryList);
    const [auth,setAuth] = useState(false); 
    useEffect(()=>{
        console.log("Od app.js :",auth);
    },[auth]);
    return (
        <Router>
            <Route path='/' exact render={()=>(<LoginPage setAuth={(a)=>{setAuth(a)}}/>)} ></Route>
            <Route path='/register' exact component={RegisterPage}></Route>
            <Route path='/events' exact component={EventsPage}></Route>
            <Route path='/orderpage' component={OrderPage}></Route>
            
        </Router>
    );

}

export default App;
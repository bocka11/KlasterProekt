import React from 'react';
import {Route,Redirect} from 'react-router-dom';


const GuardedRoute = (props)=>(

    <Route path={props.path} render={(props)=>(
        props.auth===true?<props.component />:<Redirect to="/"/>
    )}/>

)

export default GuardedRoute;

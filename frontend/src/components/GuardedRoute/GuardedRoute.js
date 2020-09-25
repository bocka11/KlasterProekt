import React from 'react';
import {Route,Redirect} from 'react-router-dom';


const GuardedRoute = (props)=>(

    <Route path={props.path} render={(props)=>(
        props.auth===false?<props.component {...props}/>:<Redirect to="/"/>
    )}/>

)

export default GuardedRoute;

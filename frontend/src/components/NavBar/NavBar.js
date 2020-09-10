import React from 'react';
import {Link} from 'react-router-dom';


import './NavBar.css'

const NavBar = ()=>{

    return <div className="navbar">
        
        <div className="left">Hello</div>
        <div className="right">
            <Link to={'/'}>
            <a href="#" class="button">Login</a>
            </Link>
            <Link to={'/register'}>
		    <a href="#" class="button">Sign Up</a>
            </Link>
        </div>
    </div>

}

export default NavBar;
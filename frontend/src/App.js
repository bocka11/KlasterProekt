import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom'

import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';

import countryList from './resources/CountriesList';

const App = ()=>{
    console.log(countryList);
    return (
        <Router>
            <Route path='/' exact component={LoginPage}></Route>
            <Route path='/register' exact component={RegisterPage}></Route>
        </Router>
    );

}

export default App;
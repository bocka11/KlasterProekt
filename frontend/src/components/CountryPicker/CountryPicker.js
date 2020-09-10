import React from 'react';
import {Dropdown} from 'semantic-ui-react';
import countryList from '../../resources/CountriesList';

const CountryPicker = ()=>(
    <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryList}
    />


)

export default CountryPicker;

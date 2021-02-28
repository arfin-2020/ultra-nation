import React from 'react';

const Country = (props) => {
    // console.log(props.name);
    // console.log(props);
    const {name,population,region,flag} = props.country
    // console.log(country);
    const addCountryHandler = props.addCountryHandler;
    const countryStyle = {
        border:"1px solid red",
        margin:"10px" ,
        padding:"10px"
    }
    return (
        <div style={countryStyle}>
           <h1>country name: {name}</h1> 
           <img style={{height:"100px"}} src={flag} alt=""/>
           <h1>country population: {population}</h1> 
           <h1>country region: {region}</h1>
           <button onClick={()=>addCountryHandler(props.country)}>Add country</button>
        </div>
    );
};

export default Country;
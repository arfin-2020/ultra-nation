import React from 'react';

const Countries = (props) => {
    const selectedCountries = props.selectedCountries;
    // let totalPopulation = 0;
    // for (let i = 0; i < selectedCountries.length; i++) {
    //     const country = selectedCountries[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    const totalPopulation = selectedCountries.reduce( (sum,country) => sum + country.population, 0)
    return (
        <div>
        <p>Total population: {totalPopulation}</p>
            <h2>This is selected Countries: {selectedCountries.length} </h2>
        </div>
    );
};

export default Countries;
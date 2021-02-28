import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Countries from './components/SelectedCountries/Countries';
import animalData from './data/data/data.json';

function App() {
  const [countries,setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [Animals,setAnimals] = useState([]);
  useEffect(() =>{
    setAnimals(animalData);
    console.log(animalData);
    // console.log(Animals);
  },[])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  })
  const addCountryHandler = (country) => {
    // console.log("it's working",country);
    //aibabe o kora jai
    // const newCountry = selectedCountries + 1;
    // setSelectedCountries(newCountry);
    const newCountry = [...selectedCountries, country];
    setSelectedCountries(newCountry);
  }
  return (
    <div className="App">
      <h1> Countries: {countries.length}</h1>
      <Countries selectedCountries ={selectedCountries}></Countries>
      <h4> Country added: {selectedCountries.length}</h4>
        {
        countries.map(country => <Country country = {country} addCountryHandler = {addCountryHandler} key = {country.alpha3Code}></Country>)
        }
        {
          animalData.map(animal => <li>Animal Name: {animal.name}</li>)
        }
    </div>
  )
}

export default App;

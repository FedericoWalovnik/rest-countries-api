import {getAllCountries, getCountryByName} from './getData.js'


const getNamefromTheURL = () =>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const countryName = urlParams.get("country");
    console.log(countryName);
}

window.addEventListener('load', getNamefromTheURL);
import * as data from './getData.js'

//HTML ELEMENTS
const countryList = document.getElementById("country-list");

const updateCountriesList = (countries) => {
    countries.forEach(country => {
        const HTMLtoAdd = `
        <div class="country-list__card" name="${country.name}" id="countryListItem">
            <div class="country-list__flag-container">
                <img src="${country.flag}" class="country-list__flag"></img>
            </div>
            <div class="country-list__country-data">
                <h3 class="title3">${country.name}</h3>
                <div class="country-list__details">
                    <p class="country-list__single-detail">Population: <span id="detail">${country.population}</span></p>
                    <p class="country-list__single-detail">Region: <span id="detail">${country.region}</span></p>
                    <p class="country-list__single-detail">Capital: <span id="detail">${country.capital}</span></p>
                </div>
            </div>
        </div>`
        countryList.insertAdjacentHTML("beforeEnd", HTMLtoAdd) 
    });
}

const getInitialData = async() =>{
    const allCountries = await data.getAllCountries();
    updateCountriesList(allCountries);
}

const handleCountryCardClick = (e) =>{
    if(e.target.classList.contains("country-list__card")){
        const countryName = e.target.getAttribute("name");
        window.location = `${data.localLink}/details.html?&country=${countryName}`;
    }
}

//Event listeners
window.addEventListener('load', getInitialData);
countryList.addEventListener("click", handleCountryCardClick.bind(Event));
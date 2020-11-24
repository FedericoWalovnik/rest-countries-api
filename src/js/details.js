import * as data from './getData.js'

//HTML ELEMENTS
const countryName = document.getElementById('countryName')
const countryImage = document.getElementById('countryImage');
const countryNativeName = document.getElementById('nativeName');
const countryPopulation = document.getElementById('population');
const countryRegion = document.getElementById('region');
const countrySubRegion = document.getElementById('subregion');
const countryCapital = document.getElementById('capital');
const countryDomain = document.getElementById('domain');
const countryCurrencies = document.getElementById('currencies');
const countryLanguages = document.getElementById('languages');
const borderCountriesList = document.getElementById('borderCountries');

const backButton = document.getElementById('backButton');

const getNamefromTheURL = () =>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const countryName = urlParams.get("country");
    return countryName;
}

const loadBorderCountries = (countryBorders) =>{
    countryBorders.forEach(country => {
        const HTMLtoAdd = `<p class="details__border-country">${country}</p>`
        borderCountriesList.insertAdjacentHTML("beforeEnd", HTMLtoAdd) 
    });

}

const loadData = (countryData) =>{
    countryName.innerHTML = countryData.name;
    console.log(`url(${countryData.flag})`)
    countryImage.style.backgroundImage = `url('${countryData.flag}')`;
    countryNativeName.innerHTML = countryData.nativeName;
    countryPopulation.innerHTML = countryData.population;
    countryRegion.innerHTML = countryData.region;
    countrySubRegion.innerHTML = countryData.subregion;
    countryCapital.innerHTML = countryData.capital;
    countryDomain.innerHTML = countryData.topLevelDomain;
    countryCurrencies.innerHTML = countryData.currencies[0].name;
    countryLanguages.innerHTML = countryData.languages[0].name;
    loadBorderCountries(countryData.borders);
}

const handleLoadDetails = async() =>{
    const countryName = getNamefromTheURL();
    const countryData = await data.getOneCountryByName(countryName);
    console.log(countryData);
    loadData(countryData);
}

const handleClickBackButton = () => {
    window.location = `${data.localLink}/index.html`
}

window.addEventListener('load', handleLoadDetails);
backButton.addEventListener('click', handleClickBackButton);
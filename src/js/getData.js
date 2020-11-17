export const getAllCountries = async() =>{
    const rawData = await fetch("https://restcountries.eu/rest/v2/all");
    const convertedData = await rawData.json();
    return convertedData;
}


export const getCountryByName = async(name) => {
    const rawData = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    const convertedData = await rawData.json();
    return convertedData[0];
}


const getData = async() =>{
    const rawData = await fetch("https://restcountries.eu/rest/v2/all");
    const convertedData = await rawData.json();
    console.log(convertedData)
}

getData()
export const localLink = "http://127.0.0.1:5500/src";
export const prodLink = "";

export const getAllCountries = async () => {
  const rawData = await fetch("https://restcountries.eu/rest/v2/all");
  const convertedData = await rawData.json();
  return convertedData;
};

export const getOneCountryByName = async (name) => {
  const rawData = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
  const convertedData = await rawData.json();
  return convertedData[0];
};

export const getCountriesByName = async (name) => {
  const rawData = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
  const convertedData = await rawData.json();
  return convertedData;
};

export const getCountriesByRegion = async (region) => {
  const rawData = await fetch(
    `https://restcountries.eu/rest/v2/region/${region}`,
  );
  const convertedData = await rawData.json();
  return convertedData;
};

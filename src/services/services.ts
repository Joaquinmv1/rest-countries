const COUNTRIES_API_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  try {
    const res = await fetch(`${COUNTRIES_API_URL}/all`);
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error(`Failed to fetch all countries: ${getErrorMessaage(error)}`);
  }
};

export const getCountrie = async (countrie: string) => {
  try {
    const res = await fetch(`${COUNTRIES_API_URL}/name/${countrie}`);
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error(`Failed to fetch country '${countrie}': ${getErrorMessaage(error)}`);
  }
};

export const getCountriesByRegion = async (region: string) => {
  try {
    const res = await fetch(`${COUNTRIES_API_URL}/region/${region}`);
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error(`Failed to fetch countries in region '${region}': ${getErrorMessaage(error)}`);
  }
};

const getErrorMessaage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred.";
};
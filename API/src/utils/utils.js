const reverseGeocode = require('country-reverse-geocoding').country_reverse_geocoding;
const countryName = reverseGeocode();

/**
 * Function to build the basic object that is used on the error middleware
 * @param {Number} status
 * @param {String} message
 * @param {*} extra - extra value that might represent an information piece of information to share on the trace
 * @returns
 */
const buildError = (status, message, extra = null) => {
  return { status, message, extra };
};

/**
 * Function to set the start and end dates for the NASA EONET API request
 * @param {String} month
 * @param {Number} year
 */
const generateQueryDates = (month, year) => {
  const startDate = new Date(month + ', ' + year);
  // Calculations to get the last day of the month based on the given params
  const lastDay = new Date(month + ', ' + year);
  const monthAux = lastDay.getMonth() + 1; // add 1 because getMonth() returns 0-based index
  const endDate = new Date(year, monthAux, 0);
  return { startDate, endDate };
};

const filterDisastersByDate = (month, year, disasters) => {
  const queryDates = generateQueryDates(month, year);
  const filtered = disasters.filter(item => {
    const miliseconds = new Date(item.closed).getTime();
    return miliseconds >= queryDates.startDate.getTime() && miliseconds <= queryDates.endDate.getTime();
  });

  return filtered;
};

const formatDateToYYYYMMDD = date => {
  let mm = date.getMonth() + 1; // month is zero-based
  let dd = date.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formatted = date.getFullYear() + '-' + mm + '-' + dd;
  return formatted;
};

/**
 * Function to get the coordinates value from a disaster coming from an object of the NASA EONET API data.
 * As the coordinates value can be a single array of two values or a set of arrays, in this second scenario
 * it will always pick just the first values (first array)
 * @param {Object} disaster
 * @returns
 */
const getCoordinatesField = disaster => {
  const coordinates = disaster.geometry[0].coordinates;
  return Array.isArray(coordinates[0]) ? coordinates.flat()[0] : coordinates;
};

const getCountryName = element => {
  const [longitude, latitude] = getCoordinatesField(element);
  const country = countryName.get_country(latitude, longitude);
  return country;
};

/**
 * Function to sort the list of objects containing the name and country of each disaster
 * The main purpose is to sort by country and just as an extra parameter will sort by name if the country are the same
 * @param {Object} a
 * @param {Object} b
 * @returns
 */
const sortDisastersByCountryAndName = (a, b) => {
  if (a?.country !== b?.country) {
    return a?.country?.localeCompare(b?.country);
  }

  return a?.name?.localeCompare(b?.name);
};

module.exports = {
  buildError,
  filterDisastersByDate,
  getCountryName,
  sortDisastersByCountryAndName,
};

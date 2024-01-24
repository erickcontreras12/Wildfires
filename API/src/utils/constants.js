const API_ERROR_CONST = 500;

const NASA_EONET_API_URL = 'https://eonet.gsfc.nasa.gov/api/v3/events';
// As not including the parameter will return only open incidents there is the need to have this helper
const NASA_EONET_API_CLOSED_EVENTS = `${NASA_EONET_API_URL}?status=closed`;

/**
 * As the NASA EONET API returns information regarding multiple type of natural disasters and we only deserve to have
 * wildfire data, so if in the future a user want i.e. Severe Storms we only have to add it to the array
 */
const WILDFIRE = 'wildfires';
const MAIN_DISASTER_TYPES_SEARCH = [WILDFIRE];

module.exports = {
  API_ERROR_CONST,
  NASA_EONET_API_URL,
  NASA_EONET_API_CLOSED_EVENTS,
  MAIN_DISASTER_TYPES_SEARCH,
};

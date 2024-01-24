const { NASA_EONET_API_CLOSED_EVENTS, MAIN_DISASTER_TYPES_SEARCH } = require('../utils/constants');

const getDisastersData = async () => {
  // Based on the categories helper set the categories are added to filter
  const uri = `${NASA_EONET_API_CLOSED_EVENTS}&category=${MAIN_DISASTER_TYPES_SEARCH.join(',')}`;
  const response = await fetch(uri);
  const disasters = await response.json();
  return disasters.events;
};

module.exports = { getDisastersData };

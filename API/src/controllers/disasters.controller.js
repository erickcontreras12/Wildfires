const { getDisastersData } = require('../services/nasaEonet.service');
const { buildError, filterDisastersByDate, getCountryName, sortDisastersByCountryAndName } = require('../utils/utils');

// In case the controller may include more endpoints the set is going to be handled as an object
endpoints = {
  getDisasters: async (req, res, next) => {
    try {
      const { month, year } = req.query;
      if (!month || !year) {
        return next(buildError(400, 'Both parameters: month and year, expected on the route'));
      }

      const disasters = await getDisastersData();
      const filteredDisasters = filterDisastersByDate(month, year, disasters);

      // Get only the required information (name and country code) and sort by country
      const mappedDisasters = filteredDisasters
        .map(element => {
          return {
            name: element.title,
            country: getCountryName(element)?.code,
          };
        })
        .sort(sortDisastersByCountryAndName);

      res.status(200).json(mappedDisasters);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = endpoints;

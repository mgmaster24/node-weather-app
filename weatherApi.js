const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')

const getWeather = location => {

  if (location === undefined) {
    return console.log("Please provide a location.");
  }

  geocode(location, (geoErr, { longitude, latitude, location} = {}) => {
    if (geoErr) {
      return console.log(geoErr);
    } 
    forecast(longitude, latitude, (forecastErr, forecateResp) => {
        if (forecastErr) {
          return console.log(forecastErr);
        }

        const {temperature, precipProbability} = forecateResp.currently
        console.log(`It is currently ${temperature} degrees out in ${location}`);
        console.log(`There is a ${precipProbability} % chance of rain`);
      })
  });
};

module.exports = {
  getWeather
};

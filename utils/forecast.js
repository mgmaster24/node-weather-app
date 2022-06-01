//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require('request');

const forecast = (long, lat, callback) => {
    const darkskyRequestParams = ["lang=en", "units=us"];
    const darkskyAccessToken = "f5e77efc6ee0ceb94149e2670a97e2be";
    const url = `https://api.darksky.net/forecast/${darkskyAccessToken}/${lat},${long}?${darkskyRequestParams.join('&')}`;
    request(
        {
            url,
            json: true
        },
        (error, {body}) => {
            if (error) {
                callback(error, undefined);
            } else if (body.error) {
                callback('darksky - Unable to find location', undefined);
            } else {
                callback(undefined, body);
            }
        }
    );
};

module.exports = forecast;
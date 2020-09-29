const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e2403e71db883e7fdf2020e651d82802&query=' + latitude + ',' + longitude 

    // url is shorthand, see 5-es6-objects
    // response is desctrutured because we only ever use the body property
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress. There is an UV index of ' + body.current.uv_index + '.');
        }
    })
}

module.exports = forecast
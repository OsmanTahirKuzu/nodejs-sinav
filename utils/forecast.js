const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=70f7150662afb87a7cfae955d76adf74&query=' + latitude + ',' + longitude + '&units=m'

    request({ url: url, json:true}, (error, {body}={}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            
            callback('Unable to find location', undefined)
        } else {
            
            callback(undefined, 'Hava ' + body.current.weather_descriptions[0] + 
            ' hava sıcaklığı ' + body.current.temperature + 
            ' hissedilen ' + body.current.feelslike + 
            ' derece')
        } 
    })
}

module.exports = forecast
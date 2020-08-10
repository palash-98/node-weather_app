const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/af2fb396aa4bbc50e48067f6242d5022/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'

    request({url: url, json:true}, (error, {body})=> {
        if(error){
            callback('Unabble to connect to the weather service', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            const chances = (body.currently.precipProbability)*100
            callback(undefined, body.daily.data[0].summary +' It is currently '+ body.currently.temperature + ' degrees. The high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a '+ chances + '% chance of rain.')
        }
    })
}

module.exports = forecast
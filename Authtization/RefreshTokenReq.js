const request = require('request');
const https = require('https');
const querystring = require('querystring');

const authQuery = 'grant_type=refresh_token&refresh_token='

module.exports = function refreshToken(appConfig, refreshToken, callback) {
request.post({
  headers: {
    'content-type' : 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + new Buffer(appConfig.consumerKey + ':' + appConfig.consumerSecret).toString('base64'),
    'Accept': 'application/json' 
  },
  url:     'https://api.getgo.com/oauth/v2/token',
  body:    authQuery + refreshToken
}, function(error, response, body) {
  if (error) {
      return console.error('upload failed:', error);
  } else if(response.statusCode === 200){
    callback(JSON.parse(body));
  }
});
}

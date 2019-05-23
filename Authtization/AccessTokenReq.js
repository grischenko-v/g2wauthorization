const request = require('request');
const https = require('https');
const querystring = require('querystring');

const authQuery = 'grant_type=authorization_code&code='

module.exports = function accessToken(appConfig, authKey, callback) {
request.post({
  headers: {
    'content-type' : 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + new Buffer(appConfig.consumerKey + ':' + appConfig.consumerSecret).toString('base64'),
    'Accept': 'application/json' 
  },
  url:     'https://api.getgo.com/oauth/v2/token',
  body:    authQuery + authKey
}, function(error, response, body) {
  if (error) {
      return console.error('upload failed:', error);
  } else if(response.statusCode === 200){
    callback(JSON.parse(body));
  }
});
}

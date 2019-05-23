const request = require('request');
const https = require('https');
const querystring = require('querystring');

module.exports = function GTWAuthtization(appConfig, accountConfig, callback) {
request.post({
  headers: {
    'content-type' : 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + new Buffer(appConfig.consumerKey + ':' + appConfig.consumerSecret).toString('base64'),
    'Accept': 'application/json' 
  },
  url:     'https://api.getgo.com/oauth/v2/token',
  body:    querystring.stringify(accountConfig)
}, function(error, response, body){
  if (error) {
      return console.error('upload failed:', error);
  } else if(response.statusCode === 200){
    callback(body);
  }
});
}

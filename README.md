###  Description
Module that simplify authorization in GoToWebinar servise.
Can be used for getting access tokens for registration users to webinars.

### Usedge
`npm install gotowebinarauthorization`
### Example
```
var G2W = require('gotowebinarauthorization');

var appConfig = {
  consumerKey: 'You consumer key',
  consumerSecret: 'you consumer secret',
  };

var accountConfig = {
  username: USER NAME,
  password: PASSWORD,
  grant_type: 'password'
};

function callback(body) {
  console.log(body);
  // this will return a obj like
  // {"access_token":"nknKGnQkkL8RUQ3d9WSH4AAFqUVz",
  // "token_type":"Bearer",
  // "refresh_token":"5FdsoLknMCLQohWSUkPTCiqAHJLcDskP",
  // "expires_in":3600,
  // "version":"3",
  // "account_key":"315181986552549382",
  // ...,
  // "organizer_key":"241402"}
} 

G2W(appConfig, accountConfig, callback);`

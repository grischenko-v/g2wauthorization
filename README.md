###  Description
Module that simplify authorization in GoToWebinar servise.
Can be used for getting access tokens for registration users to webinars.

### Usedge
`npm install gotowebinarauthorization`
### Example

consumer key and consumer secret: https://goto-developer.logmeininc.com/how-create-developer-app
authKey: https://goto-developer.logmeininc.com/how-get-access-token-and-organizer-key

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
  // {"access_token":"xxxxx",
  // "token_type":"Bearer",
  // "refresh_token":"xxxxx",
  // "expires_in":3600,
  // "version":"3",
  // "account_key":"xxxx",
  // ...,
  // "organizer_key":"xxxx"}
} 

G2W.directLogin(appConfig, accountConfig, callback);

```

### Response example

```
{ access_token: 'xxxx',
  token_type: 'Bearer',
  expires_in: 3600,
  version: '3',
  account_key: 'xxxx',
  account_type: '',
  email: 'xxxx',
  firstName: 'xxxx ',
  lastName: 'xxxx',
  organizer_key: 'xxxx',
  refresh_token: 'xxxx' }

```

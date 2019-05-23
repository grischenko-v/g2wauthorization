const directLogin = require('./Authtization/DirectLogin');
const accessToken = require('./Authtization/AccessTokenReq');
const refreshToken = require('./Authtization/RefreshTokenResp');

module.exports = {
  'directLogin': directLogin,
  'accessToken': accessToken,
  'refreshToken': refreshToken
}
/* */ 
var crypto = require('crypto');
exports.sign = function(val, secret) {
  if ('string' != typeof val)
    throw new TypeError("Cookie value must be provided as a string.");
  if ('string' != typeof secret)
    throw new TypeError("Secret string must be provided.");
  return val + '.' + crypto.createHmac('sha256', secret).update(val).digest('base64').replace(/\=+$/, '');
};
exports.unsign = function(val, secret) {
  if ('string' != typeof val)
    throw new TypeError("Signed cookie string must be provided.");
  if ('string' != typeof secret)
    throw new TypeError("Secret string must be provided.");
  var str = val.slice(0, val.lastIndexOf('.')),
      mac = exports.sign(str, secret);
  return sha1(mac) == sha1(val) ? str : false;
};
function sha1(str) {
  return crypto.createHash('sha1').update(str).digest('hex');
}

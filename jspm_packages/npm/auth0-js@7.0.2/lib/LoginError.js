/* */ 
var json_parse = require('./json-parse');
module.exports = LoginError;
function LoginError(status, details) {
  var obj;
  if (typeof details == 'string') {
    try {
      obj = json_parse(details);
    } catch (er) {
      obj = {message: details};
    }
  } else {
    obj = details || {description: 'server error'};
  }
  if (!obj.code) {
    obj.code = obj.error;
  }
  if ('unauthorized' === obj.code) {
    status = 401;
  }
  var message = obj.description || obj.message || obj.error;
  if ('PasswordStrengthError' === obj.name) {
    message = "Password is not strong enough.";
  }
  var err = Error.call(this, message);
  err.status = status;
  err.name = obj.code;
  err.code = obj.code;
  err.details = obj;
  if (status === 0) {
    if (!err.code || err.code !== 'offline') {
      err.code = 'Unknown';
      err.message = 'Unknown error.';
    }
  }
  return err;
}
if (Object && Object.create) {
  LoginError.prototype = Object.create(Error.prototype, {constructor: {value: LoginError}});
}

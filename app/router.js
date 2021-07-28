'use strict';

module.exports = function (app) {
  require('./router/home')(app);
  require('./router/user')(app);
  require('./router/login')(app);
}
'use strict';

module.exports = app => {
  const { router, controller} = app
  const jwt = app.middleware.jwt(app.config.jwt);
  router.get('/user/getUsersByShowPage', controller.user.getUsersByShowPage);
  router.post('/user/createUser', controller.user.createUser);
};
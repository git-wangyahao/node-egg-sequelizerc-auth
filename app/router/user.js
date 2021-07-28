'use strict';

module.exports = app => {
  const { router, controller} = app
  const jwt = app.middleware.jwt(app.config.jwt);
  router.get('/v1/user/getUsersByShowPage', jwt ,controller.user.getUsersByShowPage);
  router.post('/v1/user/createUser', jwt ,controller.user.createUser);
};
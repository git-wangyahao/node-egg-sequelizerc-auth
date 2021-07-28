module.exports = app => {
  const { router, controller} = app
  router.post('/v1/login', controller.login.index);
};
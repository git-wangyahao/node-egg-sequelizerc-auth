'use strict';

module.exports = app => {
  const { router, controller} = app
  router.get('/v1', controller.home.index);
};
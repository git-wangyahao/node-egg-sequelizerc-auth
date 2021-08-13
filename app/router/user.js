'use strict';

module.exports = app => {
  const { router, controller} = app
  const jwt = app.middleware.jwt(app.config.jwt);
  router.get('/user/getUsersByShowPage',  controller.user.getUsersByShowPage); //分页查询
  router.post('/user/createUser', controller.user.createUser); //创建用户
  router.post('/user/updateUser',controller.user.updateUser); //更新用户
  router.delete('/user/deleteUser/:id',controller.user.deleteUser); //删除用户
};
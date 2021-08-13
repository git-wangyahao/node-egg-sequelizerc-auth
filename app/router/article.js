'use strict';

module.exports = app => {
  const { router, controller} = app
  const jwt = app.middleware.jwt(app.config.jwt);
  router.get('/article/getArticleByShowPage',  controller.article.getArticleByShowPage); //分页查询
  router.post('/article/createArticle',controller.article.createArticle); //创建文章
  router.post('/article/updateArticle',controller.article.updateArticle); //更新文章
  // router.delete('/article/deleteArticle/:id',controller.article.deleteArticle); //删除用户
};
'use strict';

const Controller = require('egg').Controller;

/**
* @controller 文章列表
*/
class Article extends Controller {
    /** 
    * @summary 分页查询文章列表
    * @description 分页查询文章列表
    * @router get /article/getArticleByShowPage
    * @Request header string authorization
    * @request query integer *current eg:1 当前页
    * @request query integer *pageSize eg:10 单页数量
    * @request query string article_title eg: 搜索字符串
    * @response 200 baseResponse ok（ 对应 contract 里面的验证属性，下面会提到 。）
    */
     async getArticleByShowPage () {
      const { ctx } = this;
      // 处理参数
      const query = ctx.query;
      const res = await ctx.service.article.getArticleByShowPage(query);
      ctx.helper.success({ ctx, res });
  }

   /** 
    * @summary 创建文章
    * @description 
    * @router post /article/createArticle
    * @consumes applicatoin/json
    * @Request header string authorization
    * @Request body createArticleRequest *createArticle
    * @response 200 baseResponse ok
    */  

    async createArticle () {
      const { ctx } = this;
      // 参数校验
      ctx.validate(ctx.rule.createArticleRequest);
      // 处理参数
      const payload = ctx.request.body || {};
      const res = await ctx.service.article.createArticle(payload);
      ctx.helper.success({ ctx, res });
  }


    /** 
    * @summary 更新文章
    * @description  更新文章
    * @router post /article/updateArticle
    * @consumes applicatoin/json
    * @Request header string authorization
    * @Request body updateArticleRequest *updateArticle
    * @response 200 baseResponse ok
    */  

     async updateArticle () {
      const { ctx } = this;
      // 参数校验
      ctx.validate(ctx.rule.updateArticleRequest);
      // 处理参数
      const payload = ctx.request.body || {};
      const id = ctx.helper.toInt(payload.id);
      const res = await ctx.service.article.updateArticle(id, payload);
      ctx.helper.success({ ctx, res });
    }

}

module.exports = Article;
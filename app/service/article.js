'use strict';

const Service = require('egg').Service;
const { Op } = require("sequelize");
function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class Article extends Service {
  
    // 分页查询文章信息
    async getArticleByShowPage(data) {
        const ctx = this.ctx;
        const { article_title, pageSize, current} = data
        // 字符串转数字方法
        const toInt = ctx.helper.toInt
        const query = {
            offset: ((toInt(current) - 1) * toInt(pageSize)) || 0,   // 第几页
            limit: toInt(pageSize) || 10  //每页条数
        }
        // 搜索参数
        if(article_title){
            query.where = {
              article_title: {
                    [Op.like]: `%${article_title}%`
                }
            }
        }
        /**
         * count 总数
         * rows list
         */
         const list = await ctx.model.WyhArticles.findAndCountAll(query);
         return ctx.helper.formMatShowPage(list, pageSize, current) // 格式化分页数据   
    }
    // 创建文章
     async createArticle(params) {
        const ctx = this.ctx;
        const res = await ctx.model.WyhArticles.create(params);
        return res
     }
    //  更新文章
    async updateArticle(id, payload) {
        const ctx = this.ctx;
        const user = await ctx.model.WyhArticles.findByPk(id);
        if (!user) {
          ctx.status = 404;
          return;
        }
        return await user.update(payload);
    }
    // // 删除用户
    // async deleteUser(user_id) {
    //     const ctx = this.ctx;
    //     return await ctx.model.WyhUsers.destroy({
    //         where: { user_id }
    //     });
    // }


}

module.exports = Article;
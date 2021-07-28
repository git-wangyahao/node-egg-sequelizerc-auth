'use strict';

const Service = require('egg').Service;
const { Op } = require("sequelize");
function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class User extends Service {
  
    // 分页查询用户信息
    async getUsersByShowPage(data) {
        const ctx = this.ctx;
        const { user_name, pageSize, current} = data
        // 字符串转数字方法
        const toInt = ctx.helper.toInt
        const query = {
            offset: (toInt(current) - 1) * toInt(pageSize),   // 第几页
            limit: toInt(pageSize)   //每页条数
        }
        // 搜索参数
        if(user_name){
            query.where = {
                user_name: {
                    [Op.like]: `%${user_name}%`
                }
            }
        }
        /**
         * count 总数
         * rows list
         */
         const list = await ctx.model.WyhUsers.findAndCountAll(query);
         return ctx.helper.formMatShowPage(list, pageSize, current) // 格式化分页数据   
    }

    /**
     * 
     * @param {用户信息} params 
     * @returns 
     */

     async createUser(params) {
        const ctx = this.ctx;
        const res = await ctx.model.WyhUsers.create(params);
        return res
     }
}

module.exports = User;
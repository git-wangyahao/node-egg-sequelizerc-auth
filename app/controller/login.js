'use strict';


const Controller = require('egg').Controller;

/**
* @controller 用户登陆
*/
class Login extends Controller {
  
    /** 
    * @summary 用户登陆
    * @description 用户登陆
    * @router post /login
    * @consumes applicatoin/json
    * @Request body loginUserRequest *login
    * @response 200 baseResponse ok
    */

    async index () {
        const { ctx } = this;
        // 处理参数
        const params = ctx.request.body || {};
        console.log("params",params)
        ctx.validate(ctx.rule.loginUserRequest);
        // const res = await ctx.service.login.index(params);
        // ctx.helper.success({ ctx, res });
        const token = ctx.app.jwt.sign({
            ...ctx.request.body,
        }, this.app.config.jwt.secret, {
            expiresIn: '1day', // 时间根据自己定，具体可参考jsonwebtoken插件官方说明
        });
        console.log("token",token)
        ctx.body = token
    }

}

module.exports = Login;
1、框架主体结构搭建
2、集成egg-sequelize, egg-sequelize-auto, egg-swagger-doc, mysql2
3、把swagger接口导入yapi接口文档
4、扩展内置对象的接口
app/extend/request.js - 扩展 Koa#Request 类
app/extend/response.js - 扩展 Koa#Response 类
app/extend/context.js - 扩展 Koa#Context 类
app/extend/helper.js  - 扩展 Helper 类
app/extend/application.js - 扩展 Application 类
app/extend/agent.js - 扩展 Agent 类

4、封装轻轻接口相应体
5、封装请求错误相应体
6、处理鉴权逻辑
7、封装登陆退出逻辑
8、处理路由分组，路由映射
9、参数校验处理  需要安装npm i egg-validate --save
10、集成mysql2


<!-- 生成数据库model -->
https://blog.csdn.net/zhangshuanlai/article/details/106060952

参考文档
https://www.jianshu.com/p/a47a12f030cb
https://github.com/lkspc/egg-sequelize-auto
https://github.com/beansmile/egg-swagger-doc
https://www.jianshu.com/p/d1977d86993a  关联表查询语句
<!-- SQL文档 -->
https://github.com/demopark/sequelize-docs-Zh-CN 

<!-- ORM-sql-方法文档 -->
https://eggjs.org/zh-cn/basics/extend.html#application

https://blog.csdn.net/zhangshuanlai/article/details/106060952
ctx.validate 校验规则文档
https://github.com/node-modules/parameter
https://blog.csdn.net/le_17_4_6/article/details/94611179



11、使用 Passport 生态 开发登陆鉴权

 npm i --save passport-local


egg-JWT验证用户登陆
 https://segmentfault.com/a/1190000020416559
 https://blog.csdn.net/qq_32674347/article/details/104117594
 



 2021/07/29 搞登陆鉴权 注册账号，修改密码
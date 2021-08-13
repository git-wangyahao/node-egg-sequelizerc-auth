const Subscription = require('egg').Subscription;

module.exports = {
  schedule: {
    interval: '20s', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    // const res = await ctx.curl('http://localhost:7007/user/getUsersByShowPage', {
    //   dataType: 'json',
    // });
    // console.log("任务执行 : "+ res);
    // ctx.app.cache = res.data;
  },
};
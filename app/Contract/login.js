module.exports = {
  // 获取此文件的校验规则  ctx.validate(ctx.rule.createUserRequest);
  loginUserRequest: {
    user_name: { type: 'string', required: true, description: '姓名', example: 'sofiyas' ,default:'sofiyas'},
    user_password: { type: 'string', required: true, description: '密码', example: '123456',default:'123456'},
  },
};


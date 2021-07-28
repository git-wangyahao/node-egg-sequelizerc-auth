module.exports = {
  // 获取此文件的校验规则  ctx.validate(ctx.rule.createUserRequest);
  createUserRequest: {
    user_name: { type: 'string', required: true, description: '姓名', example: 'sofiyas' ,default:'sofiyas'},
    user_password: { type: 'string', required: true, description: '密码', example: '123456',default:'123456' },
    user_telephone_number: { type: 'string', required: true, description: '手机号', example: '18501368704', format: /^1[34578]\d{9}$/ },
  },
};



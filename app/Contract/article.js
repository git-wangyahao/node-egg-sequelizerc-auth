module.exports = {
  // 获取此文件的校验规则  ctx.validate(ctx.rule.createUserRequest);
  createArticleRequest: {
    user_id: { type: 'integer', required: true, description: 'user_id', example: '1' ,default:'1'},
    article_title: { type: 'string', required: true, description: '博文标题', example: 'sofiyas' ,default:'sofiyas'},
    article_content: { type: 'string', required: true, description: '博文内容', example: 'sofiyas',default:'sofiyas' },
  },
  updateArticleRequest: {
    id: { type: 'integer', required: true, description: 'id', example: '1' ,default:'1'},
    user_id: { type: 'integer', required: true, description: 'user_id', example: '1' ,default:'1'},
    article_title: { type: 'string', required: true, description: '博文标题', example: 'sofiyas' ,default:'sofiyas'},
    article_content: { type: 'string', required: true, description: '博文内容', example: 'sofiyas',default:'sofiyas' },
  },
};



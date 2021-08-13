/* indent size: 2 */
const moment =  require('moment')
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_comments', {
    comment_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    article_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    comment_like_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    comment_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    comment_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    parent_comment_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    update_time: {
      type: DataTypes.TIME,
      allowNull: true,
      get () {
        return this.getDataValue('create_time') ? moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss') : null;
      }
    }
  }, {
    tableName: 'wyh_comments'
  });

  Model.associate = function() {

  }

  return Model;
};

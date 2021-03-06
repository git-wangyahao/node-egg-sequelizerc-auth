/* indent size: 2 */
const moment =  require('moment')
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_articles', {
    article_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    article_title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    article_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    article_views: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    article_comment_count: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    article_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    article_like_count: {
      type: DataTypes.BIGINT,
      allowNull: true
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
    tableName: 'wyh_articles'
  });

  Model.associate = function() {

  }

  return Model;
};

/* indent size: 2 */

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
      allowNull: false,
      references: {
        model: 'wyh_users',
        key: 'user_id'
      }
    },
    article_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    article_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    article_views: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    article_comment_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    article_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    article_like_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'wyh_articles'
  });

  Model.associate = function() {

  }

  return Model;
};

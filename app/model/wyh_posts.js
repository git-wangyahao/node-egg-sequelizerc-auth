/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_posts', {
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    forum_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    post_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_views: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    post_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    post_comment_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'wyh_posts'
  });

  Model.associate = function() {

  }

  return Model;
};

/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_friend_links', {
    friend_link_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    friend_links: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    friend_link_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    friend_link_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    friend_link_logo: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'wyh_friend_links'
  });

  Model.associate = function() {

  }

  return Model;
};

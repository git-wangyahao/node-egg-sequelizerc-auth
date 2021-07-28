/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_moderator', {
    moderator_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    forum_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    moderator_level: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'wyh_moderator'
  });

  Model.associate = function() {

  }

  return Model;
};

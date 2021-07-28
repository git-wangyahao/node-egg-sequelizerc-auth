/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_user_friends', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    user_friends_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    user_note: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    user_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'wyh_user_friends'
  });

  Model.associate = function() {

  }

  return Model;
};

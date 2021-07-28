/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_floors', {
    floor_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    floor_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    floor_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    parent_floor_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'wyh_floors'
  });

  Model.associate = function() {

  }

  return Model;
};

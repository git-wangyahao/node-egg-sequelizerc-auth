/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_sorts', {
    sort_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sort_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sort_alias: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    sort_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    parent_sort_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'wyh_sorts'
  });

  Model.associate = function() {

  }

  return Model;
};

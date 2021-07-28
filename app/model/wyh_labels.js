/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_labels', {
    label_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    label_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    label_alias: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    label_description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wyh_labels'
  });

  Model.associate = function() {

  }

  return Model;
};

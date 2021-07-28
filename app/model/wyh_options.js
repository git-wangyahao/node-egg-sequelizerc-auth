/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_options', {
    option_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    option_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    option_values: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wyh_options'
  });

  Model.associate = function() {

  }

  return Model;
};

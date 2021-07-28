/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_menus', {
    menu_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    menu_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'wyh_menus'
  });

  Model.associate = function() {

  }

  return Model;
};

/* indent size: 2 */
const moment =  require('moment')
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_submenus', {
    link_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    menu_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    link_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    link_target: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    link_open_way: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    parent_link_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    update_time: {
      type: DataTypes.TIME,
      allowNull: true,
      get () {
        return this.getDataValue('create_time') ? moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss') : null;
      }
    }
  }, {
    tableName: 'wyh_submenus'
  });

  Model.associate = function() {

  }

  return Model;
};

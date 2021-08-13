/* indent size: 2 */
const moment =  require('moment')
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
    tableName: 'wyh_friend_links'
  });

  Model.associate = function() {

  }

  return Model;
};

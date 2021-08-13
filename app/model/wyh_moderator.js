/* indent size: 2 */
const moment =  require('moment')
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
    tableName: 'wyh_moderator'
  });

  Model.associate = function() {

  }

  return Model;
};

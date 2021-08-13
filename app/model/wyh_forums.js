/* indent size: 2 */
const moment =  require('moment')
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_forums', {
    forum_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    forum_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    forum_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    forum_logo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    forum_post_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    parent_forum_id: {
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
    tableName: 'wyh_forums'
  });

  Model.associate = function() {

  }

  return Model;
};

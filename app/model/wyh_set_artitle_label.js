/* indent size: 2 */
const moment =  require('moment')
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_set_artitle_label', {
    article_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    label_id: {
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
    tableName: 'wyh_set_artitle_label'
  });

  Model.associate = function() {

  }

  return Model;
};

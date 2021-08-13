/* indent size: 2 */
const moment =  require('moment')
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wyh_set_artitle_sort', {
    article_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sort_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    tableName: 'wyh_set_artitle_sort'
  });

  Model.associate = function() {

  }

  return Model;
};

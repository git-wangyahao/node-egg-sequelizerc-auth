/* indent size: 2 */

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
    }
  }, {
    tableName: 'wyh_set_artitle_sort'
  });

  Model.associate = function() {

  }

  return Model;
};

/* indent size: 2 */

module.exports = app => {

  const DataTypes = app.Sequelize;
  const Model = app.model.define('wyh_users', {
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_ip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    user_password: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    user_email: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    user_profile_photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_level: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    user_rights: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    user_registration_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_birthday: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_age: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    user_telephone_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_nickname: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'wyh_users'
  }
  );

  Model.associate = function() {

  }

  return Model;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //TODO if (A.belongsTo(B)) => B_id  && if (A.hasMany(B)) => A_id ?*//
    static associate({Quiz}) {
      User.hasMany(Quiz, {
        as : "quizzes",
        foreignKey : "user_id"

        
      })
      // define association here
    }
  }
  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName:'user',
  });
  return User;
};
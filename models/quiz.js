'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User , Question , Tag}) {
      Quiz.belongsTo(User,{
        as : "users",
        foreignKey : "user_id"
      }),
      Quiz.hasMany(Question, {
        as : "questions",
        foreignKey : 'quiz_id'
      }),
      Quiz.belongsToMany(Tag,{
        as : "tags",
        through : "quiz_has_tag",
        foreignKey : "quiz_id",
        otherKey : "tag_id"

      })
      // define association here
    }
  }
  Quiz.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Quiz',
    tableName:'quiz'
  });
  return Quiz;
};